const express = require('express');
const {
  getPatientInfo,
  getAppointments,
  getLabResults,
  updatePatientInfo,
} = require('../controllers/patientController');
const router = express.Router();

router.get('/info', getPatientInfo);
router.get('/appointments', getAppointments);
router.get('/lab-results', getLabResults);
router.put('/info', updatePatientInfo);

module.exports = router;