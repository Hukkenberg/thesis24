
const express = require('express');
const { getAllUsers } = require('../controllers/adminController');
const { authenticate, authorize } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/users', authenticate, authorize(['admin']), getAllUsers);

module.exports = router;
