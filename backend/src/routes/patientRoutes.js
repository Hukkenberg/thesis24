const express = require('express');
const { getPatientProfile, updatePatientProfile } = require('../controllers/patientController');
const authMiddleware = require('../middlewares/authMiddleware');
const patientValidator = require('../validators/patientValidator');
const router = express.Router();

router.get('/profile', authMiddleware, getPatientProfile);
router.put('/profile', authMiddleware, patientValidator.validatePatientUpdate, updatePatientProfile);

module.exports = router;
