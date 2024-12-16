
const express = require('express');
const router = express.Router();
const roleAuth = require('../middleware/roleAuth');
const { Users } = require('../models');

// Middleware to protect routes for 'lab' and 'admin' roles
router.use(roleAuth(['lab', 'admin']));

// GET all lab results (example route)
router.get('/', async (req, res) => {
  try {
    const labResults = await Users.findAll({ where: { role: 'patient' } }); // Placeholder logic
    res.json({ message: 'List of lab results', data: labResults });
  } catch (error) {
    console.error('Error fetching lab results:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Placeholder for creating new lab results
router.post('/', async (req, res) => {
  try {
    const { patientId, result } = req.body;
    if (!patientId || !result) {
      return res.status(400).json({ error: 'Patient ID and result are required' });
    }
    // Insert into database (replace with real model logic)
    res.json({ message: 'Lab result created successfully' });
  } catch (error) {
    console.error('Error creating lab result:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
