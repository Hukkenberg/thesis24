
const express = require('express');
const { getAllPatients, getPatientById } = require('../controllers/patientController');
const router = express.Router();

router.get('/', getAllPatients);
router.get('/:id', getPatientById);

module.exports = router;
