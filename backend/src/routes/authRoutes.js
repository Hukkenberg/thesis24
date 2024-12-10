const express = require('express');
const { login, refreshToken } = require('../controllers/authController');
const { validateLogin } = require('../validators/authValidator');

const router = express.Router();

router.post('/login', validateLogin, login);
router.post('/refresh', refreshToken);

module.exports = router;
