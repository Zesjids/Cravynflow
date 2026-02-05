const express = require('express');
const router = express.Router();
const registerController = require('../controller/userRegister');

router.post('/', registerController.handleNewUser);

module.exports =  router ;