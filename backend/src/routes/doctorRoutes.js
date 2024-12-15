
const express = require('express');
const doctorController = require('../controllers/doctorController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/patients', authMiddleware, doctorController.getPatientsByDoctor);
router.put('/:patientId/diagnosis', authMiddleware, doctorController.updateDiagnosis);
router.get('/:patientId/history', authMiddleware, doctorController.getPatientHistory);

module.exports = router;
