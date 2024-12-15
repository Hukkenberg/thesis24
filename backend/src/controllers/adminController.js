// adminController.js
const User = require('../models/User');
const Patient = require('../models/Patient');
const Appointment = require('../models/Appointment');

// Fetch all administrators (example implementation)
exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await User.findAll({ where: { role: 'admin' } });
    res.status(200).json({ admins });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Manage accounts
exports.manageAccount = async (req, res) => {
  try {
    const { id, role } = req.body;
    const updatedUser = await User.update({ role }, { where: { id }, returning: true });
    res.status(200).json({ message: 'Account updated successfully', user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Manage appointments
exports.manageAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.findAll();
    res.status(200).json({ appointments });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Generate report
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
