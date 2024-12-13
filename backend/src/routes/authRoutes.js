const express = require('express');
const { login, logout, refreshToken } = require('../controllers/authController');

const router = express.Router();

router.post('/login', login);
router.post('/logout', logout); // Added logout route to avoid undefined errors
router.post('/refresh', refreshToken);

module.exports = router;
