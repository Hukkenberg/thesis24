const { AuditLog } = require('../models');

exports.logAction = (action) => async (req, res, next) => {
  try {
    await AuditLog.create({
      user_id: req.user.id,
      action,
      details: JSON.stringify(req.body),
    });
    next();
  } catch (error) {
    console.error('Lỗi khi ghi nhật ký:', error);
    next();
  }
};