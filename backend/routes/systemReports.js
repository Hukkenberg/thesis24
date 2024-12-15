const express = require('express');
const { getSummaryReport } = require('../controllers/systemReports');
const router = express.Router();

router.get('/summary', getSummaryReport);

module.exports = router;