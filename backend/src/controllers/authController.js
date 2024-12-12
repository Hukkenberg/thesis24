const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Login function
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token, user: { id: user.id, role: user.role } });
  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
};

// Refresh token
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

// Middleware to Verify JWT Token
exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach decoded user data to the request
    next(); // Pass control to the next middleware
  } catch (err) {
    res.status(403).json({ error: 'Invalid or expired token.' });
  }
};
