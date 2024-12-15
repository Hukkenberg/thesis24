const express = require('express');
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Lấy danh sách admin
router.get('/admins', authMiddleware, adminController.getAllAdmins);

// Lấy danh sách bệnh nhân
router.get('/patients', authMiddleware, adminController.getAllPatients);

// Quản lý tài khoản
router.put('/account', authMiddleware, adminController.manageAccount);

// Quản lý lịch khám
router.get('/appointments', authMiddleware, adminController.manageAppointments);

// Tạo báo cáo
router.get('/report', authMiddleware, adminController.generateReport);

module.exports = router;
