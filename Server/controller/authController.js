const pool = require('../config/database');
const bcrypt = require('bcrypt'); 

require('dotenv').config();
const jwt = require('jsonwebtoken');
const cookie = require('cookie-parser'); 

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  if ( !email || !password ) return res.status(400).json({'message': 'Please, provide your login details'});
  const result = await pool.query('SELECT * FROM userdata WHERE email = $1', [email]);
  if (result.rowCount === 0) return res.sendStatus(401).json({'messsage': 'Invalid login details'});

  const foundUser = result.rows[0];

  const match = await bcrypt.compare(password, foundUser.password); 
  if (match) 
  {
    //Create JWTs
    const accessToken = jwt.sign(
      {"username": foundUser.username},
      process.env.ACCESS_TOKEN_SECRET,
      {expiresIn: '8m'}
    );

    const refreshToken = jwt.sign(
      {"username": foundUser.username},
      process.env.REFRESH_TOKEN_SECRET,
      {expiresIn: '2d'}
    );
    await pool.query(' UPDATE userdata SET refresh_token = $1 WHERE id = $2 ', [refreshToken, foundUser.id]);

    res.cookie('jwt', refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000 * 2,
      secure: true
    });

    res.json({message: 'User is logged in',
      accessToken});
  }
    
  else {res.sendStatus(401)}
}

module.exports =  { handleLogin };