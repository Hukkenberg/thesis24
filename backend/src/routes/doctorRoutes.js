const express = require('express');
const { getPatients, updateDiagnosis } = require('../controllers/doctorController');
const router = express.Router();

router.get('/patients', getPatients);
router.post('/patients/:id/diagnosis', updateDiagnosis);

module.exports = router;
