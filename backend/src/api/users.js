const express = require('express');
const { authMiddleware } = require('../../middlewares/authMiddleware');
const { rbacMiddleware } = require('../../middlewares/rbacMiddleware');
const router = express.Router();

// Admin-only route
router.get('/admin-dashboard', authMiddleware, rbacMiddleware(['admin']), (req, res) => {
    res.send('Welcome to the admin dashboard');
});

// Doctor-only route
router.get('/doctor-patients', authMiddleware, rbacMiddleware(['doctor']), (req, res) => {
    res.send('List of patients for the doctor');
});

// Patient-only route
router.get('/patient-profile', authMiddleware, rbacMiddleware(['patient']), (req, res) => {
    res.send('Patient profile');
});

module.exports = router;
