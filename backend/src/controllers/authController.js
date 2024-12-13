const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ status: 'error', message: 'Invalid credentials', data: null });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ status: 'success', message: 'Login successful', data: { token, user: { id: user.id, role: user.role } } });
  } catch (err) {
    res.status(500).json({ status: 'error', message: 'Login failed', data: null });
  }
};

exports.refreshToken = async (req, res) => {
  try {
    const { token } = req.body;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const newToken = jwt.sign({ id: decoded.id, role: decoded.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ status: 'success', message: 'Token refreshed', data: { token: newToken } });
  } catch (err) {
    res.status(401).json({ status: 'error', message: 'Invalid or expired token', data: null });
  }
};
