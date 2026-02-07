const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const io = require('socket.io');
const verifyJwt = require('./middleware/verifyJwt');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 3500;

app.use(express.urlencoded({ extended: false }))

app.use(express.json());

console.log(main);

app.use(cookieParser());

app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/refresh', require('./routes/refreshToken'));


app.use(verifyJwt);


app.listen(PORT, () => console.log(`Server running on  ${PORT}`));