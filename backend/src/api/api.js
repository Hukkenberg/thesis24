const express = require('express');
const authRoutes = require('../routes/authRoutes');
const userRoutes = require('../routes/userRoutes');
const appointmentRoutes = require('../routes/appointmentRoutes');
const doctorRoutes = require('../routes/doctorRoutes');
const patientRoutes = require('../routes/patientRoutes');
const labRoutes = require('../routes/labRoutes');
const adminRoutes = require('../routes/adminRoutes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/appointments', appointmentRoutes);
router.use('/doctors', doctorRoutes);
router.use('/patients', patientRoutes);
router.use('/labs', labRoutes);
router.use('/admin', adminRoutes);

module.exports = router;
