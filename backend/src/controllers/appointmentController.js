// backend/src/controllers/appointmentController.js
const Appointment = require('../models/Appointment');
const { notifyUser } = require('../services/notificationService');

exports.createAppointment = async (req, res) => {
  try {
    const { patientId, doctorId, date } = req.body;
    const appointment = await Appointment.create({ patientId, doctorId, date });
    await notifyUser(patientId, `Your appointment is scheduled for ${date}`);
    res.status(201).json({ appointment, message: 'Appointment created successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create appointment.' });
  }
};

exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.findAll();
    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve appointments.' });
  }
};

exports.updateAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const { date } = req.body;
    const appointment = await Appointment.update({ date }, { where: { id } });
    res.status(200).json({ appointment, message: 'Appointment updated successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update appointment.' });
  }
};

exports.deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    await Appointment.destroy({ where: { id } });
    res.status(200).json({ message: 'Appointment deleted successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete appointment.' });
  }
};
