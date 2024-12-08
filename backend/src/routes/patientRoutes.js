const express = require('express');
const { getPatientProfile, updatePatientProfile } = require('../controllers/patientController');
const router = express.Router();

router.get('/profile', getPatientProfile);
router.put('/profile', updatePatientProfile);

module.exports = router;
