const express = require('express');
const { login, logout, refreshToken } = require('../controllers/authController');

const router = express.Router();

router.post('/login', login);
router.post('/logout', logout);
router.post('/refresh', refreshToken); // Thêm endpoint refresh token

module.exports = router;
