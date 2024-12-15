const Appointment = require('../models/appointments');

exports.createAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body);
    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.cancelAppointment = async (req, res) => {
  try {
    const deleted = await Appointment.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: 'Appointment not found' });
    res.json({ message: 'Appointment cancelled successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateAppointment = async (req, res) => {
  try {
    const updated = await Appointment.update(req.body, { where: { id: req.params.id } });
    if (!updated[0]) return res.status(404).json({ message: 'Appointment not found' });
    res.json({ message: 'Appointment updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};