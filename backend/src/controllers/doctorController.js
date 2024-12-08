const pool = require('../config/db');

exports.getDoctorProfile = async (req, res) => {
  try {
    const doctor = await pool.query("SELECT * FROM doctors WHERE user_id = $1", [req.user.id]);
    if (!doctor.rows.length) return res.status(404).send("Doctor not found");
    res.json(doctor.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.viewPatients = async (req, res) => {
  try {
    const patients = await pool.query("SELECT * FROM patients WHERE doctor_id = $1", [req.user.id]);
    res.json(patients.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
