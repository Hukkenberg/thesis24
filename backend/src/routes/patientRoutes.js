
const express = require('express');
const patientController = require('../controllers/patientController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Use the correct controller method
router.get('/:id', authMiddleware, patientController.getPatientProfile);

module.exports = router;
