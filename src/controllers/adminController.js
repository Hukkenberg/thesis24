const { User } = require('../models');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll({ attributes: ['id', 'name', 'email', 'role'] });
    res.json(users);
  } catch (error) {
    res.status(500).send('Lỗi khi lấy danh sách người dùng.');
  }
};

exports.createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    await User.create({ name, email, password, role });
    res.status(201).send('Tạo tài khoản thành công.');
  } catch (error) {
    res.status(500).send('Lỗi khi tạo tài khoản.');
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    await User.destroy({ where: { id: userId } });
    res.status(200).send('Xóa tài khoản thành công.');
  } catch (error) {
    res.status(500).send('Lỗi khi xóa tài khoản.');
  }
};