const pool = require('../config/database');

require('dotenv').config();
const jwt = require('jsonwebtoken');

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies; 
  if (!cookies?.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;

  const result = await pool.query('SELECT * FROM userdata WHERE refresh_token = $1', [refreshToken]);
  if (result.rowCount === 0) return res.sendStatus(403);

  const foundUser = result.rows[0];

    
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    (err, decoded) => {
      if (err || foundUser.username !== decoded.username) return res.sendStatus(403);
      const accessToken = jwt.sign(
        { "username": decoded.username },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: '8m '}
      );
      res.json({ accessToken });
    } 

    ); 

  }
  

module.exports =  { handleRefreshToken };