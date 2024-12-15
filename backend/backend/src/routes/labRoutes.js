
const express = require('express');
const labController = require('../controllers/labController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/results', authMiddleware, labController.getLabResults);

module.exports = router;
