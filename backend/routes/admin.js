const express = require('express');
const { assignDoctorToPatient } = require('../controllers/admin');
const router = express.Router();

router.put('/assign-doctor', assignDoctorToPatient);

module.exports = router;