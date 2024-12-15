
const express = require('express');
const patientController = require('../controllers/patientController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/:id', authMiddleware, patientController.getPatientProfile);
router.post('/', authMiddleware, patientController.registerPatient); // Added route for registerPatient

module.exports = router;
