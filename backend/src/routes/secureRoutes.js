const express = require('express');
const { authenticate } = require('../../middlewares/authenticate');
const router = express.Router();

router.get('/profile', authenticate, (req, res) => {
    res.json({ message: 'Welcome to your profile', user: req.user });
});

module.exports = router;
