
const express = require('express');
const patientController = require('../controllers/patientController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, patientController.registerPatient);
router.get('/:id', authMiddleware, patientController.getPatientProfile);

module.exports = router;
