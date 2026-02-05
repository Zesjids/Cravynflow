 require('dotenv').config();
const jwt = require('jsonwebtoken');

const verifyJwt = (req, res, next) => {
  const authHeader = req.header['authorization'];
  if (!authHeader) return res.sendStatus(401);
  console.log(authHeader);
  const token = authHeader.split('')[1];
  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET,
    (err, decoded) => {
      if (err) res.sendStatus(403);
      req.user = decoded.username;
      next();
    }
  )
  
}

module.exports = verifyJwt;