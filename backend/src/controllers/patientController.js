const Patient = require('../models/Patient');

exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.findAll({ include: [{ association: 'doctor', attributes: ['name', 'email'] }] });
    res.status(200).json(patients);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch patients' });
  }
};

exports.createPatient = async (req, res) => {
  try {
    const { name, age, gender, doctorId } = req.body;
    const patient = await Patient.create({ name, age, gender, doctorId });
    res.status(201).json(patient);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create patient' });
  }
};

exports.deletePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await Patient.destroy({ where: { id } });
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }
    res.status(200).json({ message: 'Patient deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete patient' });
  }
};

exports.updatePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, gender, diagnosis } = req.body;
    const [updated] = await Patient.update(
      { name, age, gender, diagnosis },
      { where: { id }, returning: true }
    );
    if (!updated) {
      return res.status(404).json({ error: 'Patient not found.' });
    }
    const updatedPatient = await Patient.findByPk(id);
    res.status(200).json({ patient: updatedPatient, message: 'Patient updated successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update patient.' });
  }
};
