const express = require('express');
const { generatePatientProgressReport } = require('../controllers/patientReports');
const router = express.Router();

router.get('/:patientId', generatePatientProgressReport);

module.exports = router;