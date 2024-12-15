const express = require('express');
const { updatePatientInfo, getPatientInfo } = require('../controllers/patients');
const router = express.Router();

router.get('/:id', getPatientInfo);
router.put('/:id', updatePatientInfo);

module.exports = router;