const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const verifyJwt = require('../middleware/verifyJwt');

router.route('/')
    .get(verifyJwt)
    .post(authController.handleLogin);

module.exports = router;