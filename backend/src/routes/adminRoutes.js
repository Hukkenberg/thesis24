const express = require('express');
const { getAllUsers, updateUserRole } = require('../controllers/adminController');
const { authenticate } = require('../middlewares/authMiddleware');
const { authorize } = require('../middlewares/roleMiddleware');

const router = express.Router();

router.get('/users', authenticate, authorize(['admin']), getAllUsers);
router.post('/update-role', authenticate, authorize(['admin']), updateUserRole);

module.exports = router;
