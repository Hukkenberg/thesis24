const express = require('express');
const { getAllUsers, manageRoles } = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');
const router = express.Router();

router.get('/users', authMiddleware, roleMiddleware('admin'), getAllUsers);
router.put('/roles', authMiddleware, roleMiddleware('admin'), manageRoles);

module.exports = router;
