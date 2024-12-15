const express = require('express');
const { getActivityLog } = require('../controllers/activity');
const router = express.Router();

router.get('/:userId', getActivityLog);

module.exports = router;