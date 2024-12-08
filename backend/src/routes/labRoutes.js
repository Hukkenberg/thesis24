const express = require('express');
const { viewLabReports, uploadLabReport } = require('../controllers/labController');
const router = express.Router();

router.get('/reports', viewLabReports);
router.post('/upload', uploadLabReport);

module.exports = router;
