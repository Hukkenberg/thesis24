const Patient = require("../models/Patient");
const Progress = require("../models/Progress");
const Appointment = require("../models/Appointment");

// Lấy thông tin bệnh nhân
exports.getPatientInfo = async (req, res) => {
  try {
    const patient = await Patient.findOne({ where: { userId: req.user.id } });
    if (!patient) return res.status(404).json({ message: "Không tìm thấy bệnh nhân." });
    res.json(patient);
  } catch (err) {
    res.status(500).json({ message: "Lỗi hệ thống." });
  }
};

// Cập nhật thông tin bệnh nhân
exports.updatePatientInfo = async (req, res) => {
  try {
    const { fullName, dob, address, phone } = req.body;
    await Patient.update({ fullName, dob, address, phone }, { where: { userId: req.user.id } });
    res.json({ message: "Cập nhật thông tin thành công." });
  } catch (err) {
    res.status(500).json({ message: "Lỗi hệ thống." });
  }
};

// Lấy tiến triển bệnh
exports.getProgress = async (req, res) => {
  try {
    const progress = await Progress.findAll({ where: { patientId: req.user.id } });
    res.json(progress);
  } catch (err) {
    res.status(500).json({ message: "Lỗi hệ thống." });
  }
};

// Lấy lịch khám
exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.findAll({ where: { patientId: req.user.id } });
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: "Lỗi hệ thống." });
  }
};
