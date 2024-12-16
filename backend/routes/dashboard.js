
const express = require('express');
const router = express.Router();
const { Users } = require('../models'); // Sequelize models

router.get('/dashboard/:role', async (req, res) => {
  try {
    const role = req.params.role;

    if (role === 'doctor') {
      return res.json({
        message: 'Doctor Dashboard',
        links: [
          { name: 'Manage Patients', url: '/patients' },
          { name: 'View Appointments', url: '/appointments' },
          { name: 'Progress Charts', url: '/reports/chart' },
          { name: 'Prescriptions', url: '/prescriptions' },
        ],
      });
    }

    if (role === 'patient') {
      return res.json({
        message: 'Patient Dashboard',
        links: [
          { name: 'View Appointments', url: '/appointments' },
          { name: 'View Progress Charts', url: '/reports/chart' },
          { name: 'Manage Personal Data', url: '/patients/manage' },
          { name: 'Medical History', url: '/reports' },
        ],
      });
    }

    if (role === 'lab') {
      return res.json({
        message: 'Lab Staff Dashboard',
        links: [
          { name: 'Manage Lab Reports', url: '/reports' },
          { name: 'View Scheduled Tests', url: '/appointments' },
        ],
      });
    }

    if (role === 'admin') {
      return res.json({
        message: 'Admin Dashboard',
        links: [
          { name: 'User Management', url: '/admin/users' },
          { name: 'System Reports', url: '/reports/system' },
        ],
      });
    }

    return res.status(404).json({ error: 'Invalid role' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
