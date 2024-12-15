
const express = require('express');
const labController = require('../controllers/labController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/results', authMiddleware, labController.getPendingLabResults);
router.put('/results/:id', authMiddleware, labController.updateLabResult);
router.get('/results/:id/abnormal', authMiddleware, labController.markAbnormalResults);

module.exports = router;
