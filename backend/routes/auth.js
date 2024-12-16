
const express = require('express');
const router = express.Router();
const { Users } = require('../models');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({ where: { email, password } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    res.json({
      message: 'Login successful',
      user: { id: user.id, name: user.name, role: user.role },
      token: 'mock-jwt-token' // Replace with real JWT logic in production
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
