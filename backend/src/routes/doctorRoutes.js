
const express = require('express');
const doctorController = require('../controllers/doctorController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/patients', authMiddleware, doctorController.getPatientsByDoctor);

module.exports = router;
