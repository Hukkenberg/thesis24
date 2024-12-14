
const express = require('express');
const { getAllPatients, getPatientById } = require('../controllers/patientController');
const { authenticate } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', authenticate, getAllPatients);
router.get('/:id', authenticate, getPatientById);

module.exports = router;
