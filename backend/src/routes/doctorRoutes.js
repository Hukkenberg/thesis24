const express = require('express');
const { getDoctorProfile, viewPatients } = require('../controllers/doctorController');
const router = express.Router();

router.get('/profile', getDoctorProfile);
router.get('/patients', viewPatients);

module.exports = router;
