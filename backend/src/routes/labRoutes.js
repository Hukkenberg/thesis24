
const express = require('express');
const labController = require('../controllers/labController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Use the correct controller method
router.get('/results', authMiddleware, labController.getPendingLabResults);

module.exports = router;
