const Patient = require("../models/Patient");

exports.getAllPatients = async (req, res) => {
  const patients = await Patient.findAll();
  res.status(200).json(patients);
};

exports.getPatientById = async (req, res) => {
  const patient = await Patient.findByPk(req.params.id);
  if (!patient) {
    return res.status(404).json({ message: "Patient not found" });
  }
  res.status(200).json(patient);
};

exports.createPatient = async (req, res) => {
  const patient = await Patient.create(req.body);
  res.status(201).json(patient);
};

exports.updatePatient = async (req, res) => {
  const patient = await Patient.findByPk(req.params.id);
  if (!patient) {
    return res.status(404).json({ message: "Patient not found" });
  }
  await patient.update(req.body);
  res.status(200).json(patient);
};

exports.deletePatient = async (req, res) => {
  const patient = await Patient.findByPk(req.params.id);
  if (!patient) {
    return res.status(404).json({ message: "Patient not found" });
  }
  await patient.destroy();
  res.status(204).send();
};
