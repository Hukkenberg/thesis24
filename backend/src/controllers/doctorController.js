const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");
const Appointment = require("../models/Appointment");
const Progress = require("../models/Progress");

exports.getPatients = async (req, res) => {
  try {
    const patients = await Patient.findAll({ where: { doctorId: req.user.id } });
    res.json(patients);
  } catch (err) {
    res.status(500).json({ message: "Lỗi hệ thống." });
  }
};

exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.findAll({ where: { doctorId: req.user.id } });
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: "Lỗi hệ thống." });
  }
};

exports.updateProgress = async (req, res) => {
  try {
    const { patientId, details } = req.body;
    await Progress.create({ patientId, details, date: new Date() });
    res.json({ message: "Cập nhật tiến triển thành công." });
  } catch (err) {
    res.status(500).json({ message: "Lỗi hệ thống." });
  }
};
