const Patient = require('../models/Patient');
const bcrypt = require('bcryptjs');

// Register Patient
exports.registerPatient = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newPatient = await Patient.create({
      name,
      email,
      password: hashedPassword,
    });
    res.status(201).json({ message: 'Patient registered successfully', patient: newPatient });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Patient Profile
exports.getPatientProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await Patient.findOne({ where: { id } });
    if (!patient) return res.status(404).json({ message: 'Patient not found' });
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
