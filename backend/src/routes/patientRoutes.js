
const express = require('express');
const { getAllPatients, createPatient, updatePatient, deletePatient } = require('../controllers/patientController');
const { validatePatientCreation } = require('../validators/patientValidator');
const { authenticate } = require('../middlewares/authenticate');

const router = express.Router();

router.get('/', authenticate, getAllPatients);
router.post('/', authenticate, validatePatientCreation, createPatient);
router.put('/:id', authenticate, validatePatientCreation, updatePatient);
router.delete('/:id', authenticate, deletePatient);

module.exports = router;
