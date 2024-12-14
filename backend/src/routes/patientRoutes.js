const express = require('express');
const {
  getAllPatients,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient,
  trackPatientProgress,
} = require('../controllers/patientController');
const { validatePatientCreation } = require('../validators/patientValidator');
const { authenticate } = require('../middlewares/authenticate');

const router = express.Router();

// Lấy danh sách tất cả bệnh nhân
router.get('/', authenticate, getAllPatients);

// Lấy thông tin chi tiết của một bệnh nhân
router.get('/:id', authenticate, getPatientById);

// Tạo mới một bệnh nhân
router.post('/', authenticate, validatePatientCreation, createPatient);

// Cập nhật thông tin một bệnh nhân
router.put('/:id', authenticate, validatePatientCreation, updatePatient);

// Xóa một bệnh nhân
router.delete('/:id', authenticate, deletePatient);

// Theo dõi tiến trình điều trị của một bệnh nhân
router.get('/:id/progress', authenticate, trackPatientProgress);

module.exports = router;
