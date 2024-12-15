
const express = require('express');
const doctorController = require('../controllers/doctorController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/patients', authMiddleware, doctorController.getPatientsByDoctor);
router.put('/:patientId/diagnosis', authMiddleware, doctorController.updateDiagnosis); // Added route for updateDiagnosis
router.get('/:patientId/history', authMiddleware, doctorController.getPatientHistory); // Added route for getPatientHistory

module.exports = router;
