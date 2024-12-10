// backend/src/controllers/reportController.js
const { createReport } = require('../services/reportService');
const Patient = require('../models/Patient');

exports.generatePatientReport = async (req, res) => {
  try {
    const { patientId } = req.params;
    const patientData = await Patient.findById(patientId);
    const report = await createReport({ name: patientData.name, age: patientData.age });
    res.status(200).json({ report, message: 'Patient report generated successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to generate report.' });
  }
};
