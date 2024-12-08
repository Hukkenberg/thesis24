const pool = require('../config/db');

exports.getPatientProfile = async (req, res) => {
  try {
    const patient = await pool.query("SELECT * FROM patients WHERE user_id = $1", [req.user.id]);
    if (!patient.rows.length) return res.status(404).send("Patient not found");
    res.json(patient.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updatePatientProfile = async (req, res) => {
  const { name, age } = req.body;
  try {
    await pool.query("UPDATE patients SET name = $1, age = $2 WHERE user_id = $3", [name, age, req.user.id]);
    res.send("Profile updated");
  } catch (err) {
    res.status(500).send(err.message);
  }
};
