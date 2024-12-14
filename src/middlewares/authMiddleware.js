const jwt = require('jsonwebtoken');
const { User } = require('../models');

// Middleware xác thực JWT
exports.verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.id);
    if (!user) return res.status(401).send('Người dùng không tồn tại.');
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send('Xác thực thất bại.');
  }
};

// Middleware phân quyền dựa trên vai trò
exports.verifyRole = (role) => (req, res, next) => {
  if (req.user.role !== role) {
    return res.status(403).send('Không có quyền truy cập.');
  }
  next();
};