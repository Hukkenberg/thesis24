const pool = require('../config/db');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await pool.query("SELECT * FROM users");
    res.json(users.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.manageRoles = async (req, res) => {
  const { userId, role } = req.body;
  try {
    await pool.query("UPDATE users SET role = $1 WHERE id = $2", [role, userId]);
    res.send("Role updated");
  } catch (err) {
    res.status(500).send(err.message);
  }
};
