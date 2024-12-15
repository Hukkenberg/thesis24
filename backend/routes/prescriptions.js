const express = require('express');
const { createPrescription, getPrescriptions } = require('../controllers/prescriptions');
const router = express.Router();

router.post('/', createPrescription);
router.get('/:patientId', getPrescriptions);

module.exports = router;