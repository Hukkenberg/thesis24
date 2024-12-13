// Import required modules
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../../models/user'); // Adjust to match actual model import path
const router = express.Router();

// Constants
const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';
const REFRESH_TOKENS = [];

// Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Input validation
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        // Fetch user from the database
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare hashed password
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate tokens
        const accessToken = jwt.sign(
            { id: user.id, role: user.role },
            JWT_SECRET,
            { expiresIn: '15m' }
        );
        const refreshToken = jwt.sign({ id: user.id }, JWT_SECRET);
        REFRESH_TOKENS.push(refreshToken);

        // Respond with tokens
        res.json({ accessToken, refreshToken });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'An error occurred during login' });
    }
});

// Refresh Token Route
router.post('/refresh', (req, res) => {
    const { token } = req.body;

    if (!token || !REFRESH_TOKENS.includes(token)) {
        return res.status(403).json({ message: 'Invalid refresh token' });
    }

    try {
        const payload = jwt.verify(token, JWT_SECRET);
        const newAccessToken = jwt.sign(
            { id: payload.id, role: payload.role },
            JWT_SECRET,
            { expiresIn: '15m' }
        );
        res.json({ accessToken: newAccessToken });
    } catch (error) {
        console.error('Error during token refresh:', error);
        res.status(403).json({ message: 'Token expired or invalid' });
    }
});

// Export the router
module.exports = router;
