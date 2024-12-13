const express = require('express');
const { LabResult } = require('../../models/labResult');
const { authMiddleware, rbacMiddleware } = require('../../middlewares');

const router = express.Router();

// Fetch all lab results for a patient
router.get('/:patientId', authMiddleware, async (req, res) => {
    const { patientId } = req.params;

    try {
        const results = await LabResult.findAll({ where: { patientId } });
        res.status(200).json(results);
    } catch (error) {
        res.status(500).send('Error fetching lab results');
    }
});

// Add new lab result
router.post('/', authMiddleware, rbacMiddleware(['lab']), async (req, res) => {
    const { patientId, testType, result, status } = req.body;
    if (!patientId || !testType) {
        return res.status(400).send('Missing required fields');
    }

    try {
        const labResult = await LabResult.create({ patientId, testType, result, status: status || 'pending' });
        res.status(201).json(labResult);
    } catch (error) {
        res.status(500).send('Error creating lab result');
    }
});

module.exports = router;
