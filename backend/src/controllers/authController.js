const pool = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
    if (!user.rows.length) return res.status(404).send("User not found");

    const isMatch = await bcrypt.compare(password, user.rows[0].password);
    if (!isMatch) return res.status(401).send("Invalid credentials");

    const token = jwt.sign({ id: user.rows[0].id, role: user.rows[0].role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.register = async (req, res) => {
  const { username, password, role } = req.body;
  try {
    const hash = await bcrypt.hash(password, 10);
    await pool.query("INSERT INTO users (username, password, role) VALUES ($1, $2, $3)", [username, hash, role]);
    res.status(201).send("User registered");
  } catch (err) {
    res.status(500).send(err.message);
  }
};
