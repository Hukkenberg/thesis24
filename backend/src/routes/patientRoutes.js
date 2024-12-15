
const express = require('express');
const router = express.Router();
const {
  getAllPatients,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient
} = require('../controllers/patientController');
const { getAllAppointments, createAppointment, updateAppointment, deleteAppointment } = require('../controllers/appointmentController');
const { getAllTests, createTest, updateTest, deleteTest } = require('../controllers/testController');
const { isAdmin, isAuthenticated, isDoctor, isLabTechnician, isAdminOrDoctor } = require('../middlewares/authMiddleware');

// Routes for patient management
router.get('/patients', isAuthenticated, getAllPatients);
router.get('/patients/:id', isAuthenticated, getPatientById);
router.post('/patients', isAdminOrDoctor, createPatient);
router.put('/patients/:id', isAdminOrDoctor, updatePatient);
router.delete('/patients/:id', isAdmin, deletePatient);

// Routes for appointment management
router.get('/appointments', isDoctor, getAllAppointments);
router.post('/appointments', isDoctor, createAppointment);
router.put('/appointments/:id', isDoctor, updateAppointment);
router.delete('/appointments/:id', isAdmin, deleteAppointment);

// Routes for test management
router.get('/tests', isLabTechnician, getAllTests);
router.post('/tests', isLabTechnician, createTest);
router.put('/tests/:id', isLabTechnician, updateTest);
router.delete('/tests/:id', isAdmin, deleteTest);

module.exports = router;
