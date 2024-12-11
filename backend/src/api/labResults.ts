import express from 'express';
import { authMiddleware } from '../../middlewares/authMiddleware';
import { LabResult } from '../../models/labResult';

const router = express.Router();

// Fetch lab results for a patient
router.get('/:patientId', authMiddleware, async (req, res) => {
    const { patientId } = req.params;

    try {
        const results = await LabResult.findAll({ where: { patientId } });
        res.status(200).json(results);
    } catch (error) {
        res.status(500).send('Error fetching lab results');
    }
});

// Upload new lab result
router.post('/upload', authMiddleware, async (req, res) => {
    const { patientId, testType, result, status } = req.body;
    if (!patientId || !testType || !result) {
        return res.status(400).send('Missing required fields');
    }

    try {
        const labResult = await LabResult.create({ patientId, testType, result, status: status || 'pending' });
        res.status(201).send('Lab result uploaded successfully');
    } catch (error) {
        res.status(500).send('Error uploading lab result');
    }
});

// Request additional tests
router.post('/:patientId/request-test', authMiddleware, async (req, res) => {
    const { patientId } = req.params;
    const { testType, reason } = req.body;

    try {
        const labRequest = await LabResult.create({
            patientId,
            testType,
            result: null,
            status: 'requested',
            reason,
        });
        res.status(201).send('Test request created successfully');
    } catch (error) {
        res.status(500).send('Error creating test request');
    }
});

export default router;
