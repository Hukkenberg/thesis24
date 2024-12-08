const express = require('express');
const { getDoctorProfile, viewPatients } = require('../controllers/doctorController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/profile', authMiddleware, getDoctorProfile);
router.get('/patients', authMiddleware, viewPatients);

module.exports = router;
