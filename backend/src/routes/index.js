const express = require('express');
const authRoutes = require('./authRoutes');
const patientRoutes = require('./patientRoutes');
const doctorRoutes = require('./doctorRoutes');
const adminRoutes = require('./adminRoutes');
const labRoutes = require('./labRoutes');
const appointmentRoutes = require('./appointmentRoutes');

const router = express.Router();

// Consolidate route definitions
router.use('/auth', authRoutes);
router.use('/patients', patientRoutes);
router.use('/doctors', doctorRoutes);
router.use('/admins', adminRoutes);
router.use('/labs', labRoutes);
router.use('/appointments', appointmentRoutes);

module.exports = router;
