const express = require('express');
const { Appointment } = require('../../models/appointment');
const { authMiddleware, rbacMiddleware } = require('../../middlewares');

const router = express.Router();

// Fetch all appointments for a doctor
router.get('/:doctorId', authMiddleware, rbacMiddleware(['doctor']), async (req, res) => {
    const { doctorId } = req.params;

    try {
        const appointments = await Appointment.findAll({ where: { doctorId } });
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).send('Error fetching appointments');
    }
});

// Update appointment status
router.put('/:id/status', authMiddleware, rbacMiddleware(['doctor']), async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const appointment = await Appointment.findByPk(id);
        if (!appointment) return res.status(404).send('Appointment not found');

        await appointment.update({ status });
        res.status(200).json(appointment);
    } catch (error) {
        res.status(500).send('Error updating appointment status');
    }
});

module.exports = router;
