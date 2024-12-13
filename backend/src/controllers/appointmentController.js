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
