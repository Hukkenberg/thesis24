
const express = require('express');
const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Simulated account verification for testing
    if (email === 'admin@mail.com' && password === '123456') {
      return res.json({ token: 'mock-token', role: 'admin' });
    }
    return res.status(401).json({ message: 'Invalid email or password' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
