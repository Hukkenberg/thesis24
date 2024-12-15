
const express = require('express');
const labController = require('../controllers/labController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/results', authMiddleware, labController.getPendingLabResults);
router.put('/results/:id', authMiddleware, labController.updateLabResult); // Added route for updateLabResult
router.get('/results/:id/abnormal', authMiddleware, labController.markAbnormalResults); // Added route for markAbnormalResults

module.exports = router;
