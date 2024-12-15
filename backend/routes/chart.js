const express = require('express');
const { getProgressChart } = require('../controllers/chart');
const router = express.Router();

router.get('/:patientId', getProgressChart);

module.exports = router;