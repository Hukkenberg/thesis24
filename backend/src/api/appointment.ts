const express = require('express');
const { Appointment } = require('../../models/appointment');
const { authMiddleware, rbacMiddleware } = require('../../middlewares');

const router = express.Router();

// Fetch all appointments
router.get('/', authMiddleware, async (req, res) => {
    try {
        const appointments = await Appointment.findAll();
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).send('Error fetching appointments');
    }
});

// Create an appointment
router.post('/', authMiddleware, rbacMiddleware(['doctor']), async (req, res) => {
    const { patientId, doctorId, date, time } = req.body;

    if (!patientId || !doctorId || !date || !time) {
        return res.status(400).send('Missing required fields');
    }

    try {
        const newAppointment = await Appointment.create({ patientId, doctorId, date, time, status: 'scheduled' });
        res.status(201).json(newAppointment);
    } catch (err) {
        res.status(500).send('Error creating appointment');
    }
});

// Update an appointment
router.put('/:id', authMiddleware, rbacMiddleware(['doctor']), async (req, res) => {
    const { id } = req.params;
    const { date, time, status } = req.body;

    try {
        const appointment = await Appointment.findByPk(id);
        if (!appointment) return res.status(404).send('Appointment not found');

        await appointment.update({ date, time, status });
        res.status(200).json(appointment);
    } catch (err) {
        res.status(500).send('Error updating appointment');
    }
});

// Delete an appointment
router.delete('/:id', authMiddleware, rbacMiddleware(['doctor']), async (req, res) => {
    const { id } = req.params;

    try {
        const appointment = await Appointment.findByPk(id);
        if (!appointment) return res.status(404).send('Appointment not found');

        await appointment.destroy();
        res.status(200).send('Appointment deleted');
    } catch (err) {
        res.status(500).send('Error deleting appointment');
    }
});

module.exports = router;
