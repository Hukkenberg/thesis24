// File: backend/src/controllers/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.login = async (req, res) => {
  try {
    console.log('Login API called with:', req.body);
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      console.log('Invalid credentials for email:', email);
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log('Login successful, token generated:', token);
    res.status(200).json({ token, user: { id: user.id, role: user.role } });
  } catch (err) {
    console.error('Error during login:', err.message);
    res.status(500).json({ error: 'Login failed' });
  }
};

exports.logout = (req, res) => {
  res.status(200).json({ message: 'Successfully logged out' });
};
