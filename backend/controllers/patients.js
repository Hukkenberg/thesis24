const Patient = require('../models/patients');

exports.getPatientInfo = async (req, res) => {
  try {
    const patient = await Patient.findOne({ where: { userId: req.params.id } });
    if (!patient) return res.status(404).json({ message: 'Patient not found' });
    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePatientInfo = async (req, res) => {
  try {
    const updated = await Patient.update(req.body, { where: { userId: req.params.id } });
    if (!updated) return res.status(400).json({ message: 'Update failed' });
    res.json({ message: 'Patient information updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};