
const { Patient, User } = require('../models');

const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.findAll({
      include: [{ model: User, attributes: ['name', 'email'] }],
    });
    res.status(200).json({ patients });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPatientById = async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await Patient.findByPk(id, {
      include: [{ model: User, attributes: ['name', 'email'] }],
    });
    if (!patient) return res.status(404).json({ error: 'Patient not found' });
    res.status(200).json({ patient });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllPatients, getPatientById };
