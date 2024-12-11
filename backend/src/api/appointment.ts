const express = require('express');
const { Appointment } = require('../../models/appointment');
const { authMiddleware } = require('../../middlewares/authMiddleware');

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

// Create a new appointment
router.post('/create', authMiddleware, async (req, res) => {
    const { patientId, doctorId, date, time } = req.body;
    if (!patientId || !doctorId || !date || !time) {
        return res.status(400).send('Missing required fields');
    }

    try {
        const appointment = await Appointment.create({ patientId, doctorId, date, time });
        res.status(201).send('Appointment created successfully');
    } catch (error) {
        res.status(500).send('Error creating appointment');
    }
});

// Update or cancel an appointment
router.put('/:id', authMiddleware, async (req, res) => {
    const { id } = req.params;
    const { date, time, status } = req.body;

    try {
        const appointment = await Appointment.findByPk(id);
        if (!appointment) return res.status(404).send('Appointment not found');

        await appointment.update({ date, time, status });
        res.status(200).send('Appointment updated successfully');
    } catch (error) {
        res.status(500).send('Error updating appointment');
    }
});

module.exports = router;
