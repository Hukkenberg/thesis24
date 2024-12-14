const User = require('../models/User');
const Patient = require('../models/Patient');
const Appointment = require('../models/Appointment');

// Lấy danh sách bệnh nhân
exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.findAll();
    res.status(200).json({ patients });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Quản lý tài khoản
exports.manageAccount = async (req, res) => {
  try {
    const { id, role } = req.body;
    const updatedUser = await User.update({ role }, { where: { id }, returning: true });
    res.status(200).json({ message: 'Account updated successfully', user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Quản lý lịch khám
exports.manageAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.findAll();
    res.status(200).json({ appointments });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Tạo báo cáo
exports.generateReport = async (req, res) => {
  try {
    const patientCount = await Patient.count();
    const appointmentCount = await Appointment.count();
    res.status(200).json({
      report: {
        totalPatients: patientCount,
        totalAppointments: appointmentCount,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
