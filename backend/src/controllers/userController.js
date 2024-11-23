const User = require("../models/User");

exports.getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

exports.createUser = async (req, res) => {
  const { username, email, role, password } = req.body;
  const newUser = await User.create({ username, email, role, password });
  res.json(newUser);
};
