import express from 'express';
import { authMiddleware } from '../../middlewares/authMiddleware';
import { Prescription } from '../../models/prescription';
import { generatePDF } from '../../utils/pdfGenerator';

const router = express.Router();

// Fetch prescriptions for a patient
router.get('/:patientId', authMiddleware, async (req, res) => {
    const { patientId } = req.params;

    try {
        const prescriptions = await Prescription.findAll({ where: { patientId } });
        res.status(200).json(prescriptions);
    } catch (error) {
        res.status(500).send('Error fetching prescriptions');
    }
});

// Create a new prescription
router.post('/create', authMiddleware, async (req, res) => {
    const { patientId, doctorId, medications, notes } = req.body;
    if (!patientId || !doctorId || !medications) {
        return res.status(400).send('Missing required fields');
    }

    try {
        const prescription = await Prescription.create({ patientId, doctorId, medications, notes, status: 'active' });
        res.status(201).send('Prescription created successfully');
    } catch (error) {
        res.status(500).send('Error creating prescription');
    }
});

// Generate prescription report
router.get('/report', authMiddleware, async (req, res) => {
    try {
        const prescriptions = await Prescription.findAll();
        const pdfBuffer = await generatePDF(prescriptions);

        res.contentType('application/pdf');
        res.send(pdfBuffer);
    } catch (error) {
        res.status(500).send('Error generating prescription report');
    }
});

export default router;
