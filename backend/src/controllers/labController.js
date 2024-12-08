const pool = require('../config/db');

exports.viewLabReports = async (req, res) => {
  try {
    const reports = await pool.query("SELECT * FROM lab_reports WHERE user_id = $1", [req.user.id]);
    res.json(reports.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.uploadLabReport = async (req, res) => {
  const { reportDetails } = req.body;
  try {
    await pool.query("INSERT INTO lab_reports (user_id, details) VALUES ($1, $2)", [req.user.id, reportDetails]);
    res.status(201).send("Lab report uploaded");
  } catch (err) {
    res.status(500).send(err.message);
  }
};
