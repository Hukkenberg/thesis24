const AuditLog = require('../models/auditLog');

exports.getActivityLog = async (req, res) => {
  try {
    const logs = await AuditLog.findAll({ where: { userId: req.params.userId } });
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};