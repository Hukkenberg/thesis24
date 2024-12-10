const jwt = require('jsonwebtoken');

exports.generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

exports.verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    throw new Error('Invalid or expired token');
  }
};

exports.refreshToken = async (req, res) => {
  try {
    const oldToken = req.headers.authorization.split(' ')[1];
    const decoded = this.verifyToken(oldToken);
    const newToken = this.generateToken({ id: decoded.id, role: decoded.role });
    res.status(200).json({ token: newToken });
  } catch (err) {
    res.status(401).json({ error: 'Failed to refresh token' });
  }
};
