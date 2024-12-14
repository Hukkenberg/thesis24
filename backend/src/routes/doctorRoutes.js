
const express = require('express');
const { getAllDoctors } = require('../controllers/doctorController');
const { authenticate } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', authenticate, getAllDoctors);

module.exports = router;
