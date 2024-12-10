const express = require('express');
const { getLabResults, updateLabResult } = require('../controllers/labController');
const { authenticate } = require('../middlewares/authMiddleware');
const { authorize } = require('../middlewares/roleMiddleware');

const router = express.Router();

router.get('/results', authenticate, authorize(['lab']), getLabResults);
router.put('/results/:id', authenticate, authorize(['lab']), updateLabResult);

module.exports = router;
