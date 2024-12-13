const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../../models/user');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';
const REFRESH_TOKENS = [];

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(404).json({ message: 'User not found' });

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(401).json({ message: 'Invalid credentials' });

        const accessToken = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '15m' });
        const refreshToken = jwt.sign({ id: user.id }, JWT_SECRET);
        REFRESH_TOKENS.push(refreshToken);

        res.json({ accessToken, refreshToken });
    } catch (err) {
        res.status(500).json({ message: 'Error logging in' });
    }
});

// Refresh token route
router.post('/refresh', (req, res) => {
    const { token } = req.body;
    if (!token || !REFRESH_TOKENS.includes(token)) {
        return res.status(403).json({ message: 'Invalid refresh token' });
    }

    try {
        const payload = jwt.verify(token, JWT_SECRET);
        const newAccessToken = jwt.sign({ id: payload.id, role: payload.role }, JWT_SECRET, { expiresIn: '15m' });
        res.json({ accessToken: newAccessToken });
    } catch (err) {
        res.status(403).json({ message: 'Token expired' });
    }
});

module.exports = router;
