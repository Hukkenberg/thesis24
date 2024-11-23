
const Appointment = require('../models/Appointment');

exports.getAllAppointments = async (req, res) => {
    const appointments = await Appointment.getAll();
    res.json(appointments);
};
