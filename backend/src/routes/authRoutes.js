// File: backend/src/routes/authRoutes.js
const express = require('express');
const { login, logout } = require('../controllers/authController');
const { validateLogin } = require('../middlewares/validateRequest');
const { authenticate } = require('../middlewares/authenticate');

const router = express.Router();

router.post('/login', validateLogin, login);
router.post('/logout', authenticate, logout);

module.exports = router;
