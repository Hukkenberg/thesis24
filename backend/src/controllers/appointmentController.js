const Appointment = require('../models/Appointment');
const { notifyUser } = require('../services/notificationService');

exports.createAppointment = async (req, res) => {
  try {
    const { patientId, doctorId, date } = req.body;
    const appointment = await Appointment.create({ patientId, doctorId, date });
    await notifyUser(patientId, `Your appointment is scheduled for ${date}`);
    res.status(201).json({ status: 'success', message: 'Appointment created successfully', data: appointment });
  } catch (err) {
    res.status(500).json({ status: 'error', message: 'Failed to create appointment', data: null });
  }
};

exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.findAll();
    res.status(200).json({ status: 'success', message: 'Appointments retrieved successfully', data: appointments });
  } catch (err) {
    res.status(500).json({ status: 'error', message: 'Failed to retrieve appointments', data: null });
  }
};

exports.updateAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const { date } = req.body;

    const appointment = await Appointment.findByPk(id);
    if (!appointment) {
      return res.status(404).json({ status: 'error', message: 'Appointment not found', data: null });
    }

    await appointment.update({ date });
    res.status(200).json({ status: 'success', message: 'Appointment updated successfully', data: appointment });
  } catch (err) {
    res.status(500).json({ status: 'error', message: 'Failed to update appointment', data: null });
  }
};

exports.deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;

    const appointment = await Appointment.findByPk(id);
    if (!appointment) {
      return res.status(404).json({ status: 'error', message: 'Appointment not found', data: null });
    }

    await appointment.destroy();
    res.status(200).json({ status: 'success', message: 'Appointment deleted successfully' });
  } catch (err) {
    res.status(500).json({ status: 'error', message: 'Failed to delete appointment', data: null });
  }
};
