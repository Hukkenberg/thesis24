const Prescription = require('../models/prescriptions');

exports.createPrescription = async (req, res) => {
  try {
    const prescription = await Prescription.create(req.body);
    res.status(201).json(prescription);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPrescriptions = async (req, res) => {
  try {
    const prescriptions = await Prescription.findAll({ where: { patientId: req.params.patientId } });
    res.json(prescriptions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};