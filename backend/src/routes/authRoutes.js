const express = require('express');
const { login, refreshToken, verifyToken } = require('../controllers/authController'); // Ensure all methods are correctly exported
const { validateLogin } = require('../validators/authValidator'); // Ensure this method exists and is implemented

const router = express.Router();

router.post('/login', validateLogin, login); // ValidateLogin must exist
router.post('/refresh', verifyToken, refreshToken); // verifyToken must be properly imported

module.exports = router;
