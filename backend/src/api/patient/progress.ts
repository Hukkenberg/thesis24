import express from 'express';
import { authMiddleware } from '../../middlewares/authMiddleware';
import { LabResultModel } from '../../models/LabResult';

const router = express.Router();

// Fetch disease progression data
router.get('/:patientId/progress', authMiddleware, async (req, res) => {
    const { patientId } = req.params;

    try {
        const results = await LabResultModel.find({ patientId }).sort({ date: 1 });
        if (!results.length) return res.status(404).send('No progression data found');
        res.status(200).json(results);
    } catch (error) {
        res.status(500).send('Error fetching progression data');
    }
});

export default router;
