const pool = require('../config/database');
const bcrypt = require('bcrypt'); 

const handleNewUser = async (req, res) => {
  const { email, username , pwd } = req.body;
  if (!email || !username || !pwd ) return res.status(400).json({'message': 'All fields are required'});
  const duplicateCheck = await pool.query('SELECT 1 FROM userdata WHERE email = $1 OR username = $2', [email, username]);
 
  try {
    if (duplicateCheck.rowCount > 0) {
      res.status(409).json({'message': 'User already exists. Try again.'});
      const foundUser = duplicateCheck.rows[0]

      if (foundUser.email === email) {
        res.status(409).json({'message': 'Email already registered. Please login!'})
      }

      if (foundUser.username === username) {
        res.status(409).json({'message': 'Username already exists. Try again.'})
      }
      return;
    }

    const hashedPwd = await bcrypt.hash(pwd, 10);
  
    const result = await pool.query('INSERT INTO userdata(username, email, password )VALUES ($1, $2, $3) RETURNING (id, username, email, created_on)', [username, email, hashedPwd]);


    const newUser = result.rows[0];
 
    res.status(201).json({message: 'User registered successfully',});
  }

  catch(err) {
    res.status(500).json({'message': err.message });
    }
} 

module.exports = { handleNewUser }