import express from 'express';
import { authMiddleware } from '../../middlewares/authMiddleware';
import { PatientModel } from '../../models/Patient';

const router = express.Router();

// Update patient information
router.put('/update', authMiddleware, async (req, res) => {
    const { patientId, personalInfo, clinicalInfo } = req.body;
    if (!patientId || !personalInfo || !clinicalInfo) {
        return res.status(400).send('Missing required fields');
    }

    try {
        await PatientModel.updateOne(
            { _id: patientId },
            { $set: { personalInfo, clinicalInfo } }
        );
        res.status(200).send('Patient information updated successfully');
    } catch (error) {
        res.status(500).send('Error updating patient information');
    }
});

// Fetch patient information
router.get('/:patientId', authMiddleware, async (req, res) => {
    const { patientId } = req.params;

    try {
        const patient = await PatientModel.findById(patientId);
        if (!patient) return res.status(404).send('Patient not found');
        res.status(200).json(patient);
    } catch (error) {
        res.status(500).send('Error fetching patient information');
    }
});

export default router;
