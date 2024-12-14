const express = require('express');
const {
  getPendingTests,
  updateLabResult,
} = require('../controllers/labController');
const router = express.Router();

router.get('/tests', getPendingTests);
router.put('/tests/:testId', updateLabResult);

module.exports = router;