const express = require('express');
const { getPrescriptions, createPrescription } = require('../controllers/prescriptionController');
const router = express.Router();

router.get('/', getPrescriptions);
router.post('/', createPrescription);

module.exports = router;