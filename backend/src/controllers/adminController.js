const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({ attributes: ['name', 'email', 'role'] });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

exports.updateUserRole = async (req, res) => {
  try {
    const { userId, role } = req.body;
    const [updated] = await User.update({ role }, { where: { id: userId }, returning: true });
    if (!updated) {
      return res.status(404).json({ error: 'User not found' });
    }
    const user = await User.findByPk(userId, { attributes: ['name', 'email', 'role'] });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update user role' });
  }
};
