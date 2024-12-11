const express = require('express');
const { login, refreshToken } = require('../controllers/authController');
const { validateLogin } = require('../validators/authValidator');
const { verifyToken } = require('../controllers/authController');

const router = express.Router();

router.post('/login', validateLogin, login);
router.post('/refresh', verifyToken, refreshToken);

module.exports = router;
