const express = require('express');
const { Doctor } = require('../../models/doctor');
const { authMiddleware, rbacMiddleware } = require('../../middlewares');

const router = express.Router();

// Fetch all doctors
router.get('/', authMiddleware, async (req, res) => {
    try {
        const doctors = await Doctor.findAll();
        res.status(200).json(doctors);
    } catch (error) {
        res.status(500).send('Error fetching doctors');
    }
});

// Create a new doctor
router.post('/', authMiddleware, rbacMiddleware(['admin']), async (req, res) => {
    const { name, specialization, experience } = req.body;

    if (!name || !specialization || !experience) {
        return res.status(400).send('Missing required fields');
    }

    try {
        const doctor = await Doctor.create({ name, specialization, experience });
        res.status(201).json(doctor);
    } catch (error) {
        res.status(500).send('Error creating doctor');
    }
});

// Update doctor details
router.put('/:id', authMiddleware, rbacMiddleware(['admin']), async (req, res) => {
    const { id } = req.params;
    const { name, specialization, experience } = req.body;

    try {
        const doctor = await Doctor.findByPk(id);
        if (!doctor) return res.status(404).send('Doctor not found');

        await doctor.update({ name, specialization, experience });
        res.status(200).json(doctor);
    } catch (error) {
        res.status(500).send('Error updating doctor details');
    }
});

// Delete a doctor
router.delete('/:id', authMiddleware, rbacMiddleware(['admin']), async (req, res) => {
    const { id } = req.params;

    try {
        const doctor = await Doctor.findByPk(id);
        if (!doctor) return res.status(404).send('Doctor not found');

        await doctor.destroy();
        res.status(200).send('Doctor deleted');
    } catch (error) {
        res.status(500).send('Error deleting doctor');
    }
});

module.exports = router;
