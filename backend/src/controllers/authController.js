/ File: backend/src/controllers/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token, user: { id: user.id, role: user.role } });
  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
};

exports.logout = (req, res) => {
  res.status(200).json({ message: 'Successfully logged out' });
};

exports.refreshToken = (req, res) => {
  try {
    const oldToken = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(oldToken, process.env.JWT_SECRET);
    const newToken = jwt.sign({ id: decoded.id, role: decoded.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token: newToken });
  } catch (err) {
    res.status(401).json({ error: 'Failed to refresh token' });
  }
};
