const Doctor = require("../models/Doctor");

exports.getAllDoctors = async (req, res) => {
  const doctors = await Doctor.findAll();
  res.status(200).json(doctors);
};

exports.getDoctorById = async (req, res) => {
  const doctor = await Doctor.findByPk(req.params.id);
  if (!doctor) {
    return res.status(404).json({ message: "Doctor not found" });
  }
  res.status(200).json(doctor);
};

exports.createDoctor = async (req, res) => {
  const doctor = await Doctor.create(req.body);
  res.status(201).json(doctor);
};

exports.updateDoctor = async (req, res) => {
  const doctor = await Doctor.findByPk(req.params.id);
  if (!doctor) {
    return res.status(404).json({ message: "Doctor not found" });
  }
  await doctor.update(req.body);
  res.status(200).json(doctor);
};

exports.deleteDoctor = async (req, res) => {
  const doctor = await Doctor.findByPk(req.params.id);
  if (!doctor) {
    return res.status(404).json({ message: "Doctor not found" });
  }
  await doctor.destroy();
  res.status(204).send();
};
