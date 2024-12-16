
const express = require('express');
const router = express.Router();
const roleAuth = require('../middleware/roleAuth');
const { Users } = require('../models');

// Middleware to protect routes for 'admin' role
router.use(roleAuth(['admin']));

// GET: List all users (example route)
router.get('/users', async (req, res) => {
  try {
    const users = await Users.findAll();
    res.json({ message: 'List of all users', data: users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST: Placeholder for generating system reports
router.post('/reports', (req, res) => {
  res.json({ message: 'System report generated successfully.' });
});

module.exports = router;
