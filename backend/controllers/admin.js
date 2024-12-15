const Patient = require('../models/patients');

exports.assignDoctorToPatient = async (req, res) => {
  try {
    const { patientId, doctorId } = req.body;
    const updated = await Patient.update({ doctorId }, { where: { id: patientId } });
    if (!updated[0]) return res.status(404).json({ message: 'Patient not found' });
    res.json({ message: 'Doctor assigned successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};