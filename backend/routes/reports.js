const express = require('express');
const { getSummaryReport } = require('../controllers/reports');
const router = express.Router();

router.get('/summary', getSummaryReport);

module.exports = router;