
const express = require('express');
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/admins', authMiddleware, adminController.getAllAdmins);
router.put('/accounts', authMiddleware, adminController.manageAccount);
router.get('/appointments', authMiddleware, adminController.manageAppointments);
router.get('/reports', authMiddleware, adminController.generateReport);

module.exports = router;
