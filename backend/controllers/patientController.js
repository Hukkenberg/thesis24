
const Patient = require('../models/Patient');

exports.getAllPatients = async (req, res) => {
    const patients = await Patient.getAll();
    res.json(patients);
};

exports.getPatientById = async (req, res) => {
    const patient = await Patient.getById(req.params.id);
    if (!patient) return res.status(404).json({ message: 'Patient not found' });
    res.json(patient);
};
