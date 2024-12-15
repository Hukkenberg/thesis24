
const Patient = require('../models/Patient');

exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.findAll();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching patients', error });
  }
};

exports.getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.id);
    if (!patient) return res.status(404).json({ message: 'Patient not found' });
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching patient', error });
  }
};

exports.createPatient = async (req, res) => {
  try {
    const newPatient = await Patient.create(req.body);
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(500).json({ message: 'Error creating patient', error });
  }
};

exports.updatePatient = async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.id);
    if (!patient) return res.status(404).json({ message: 'Patient not found' });

    const updatedPatient = await patient.update(req.body);
    res.status(200).json(updatedPatient);
  } catch (error) {
    res.status(500).json({ message: 'Error updating patient', error });
  }
};

exports.deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.id);
    if (!patient) return res.status(404).json({ message: 'Patient not found' });

    await patient.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting patient', error });
  }
};
