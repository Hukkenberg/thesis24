const Patient = require('../models/Patient');

exports.getPatients = async (req, res) => {
  try {
    const doctorId = req.user.id;
    const patients = await Patient.find({ doctorId }).populate('doctorId', 'name email');
    res.status(200).json(patients);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch patients' });
  }
};

exports.updateDiagnosis = async (req, res) => {
  try {
    const { id } = req.params;
    const { diagnosis } = req.body;
    const patient = await Patient.findByIdAndUpdate(id, { diagnosis }, { new: true }).populate('doctorId', 'name');
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }
    res.status(200).json(patient);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update diagnosis' });
  }
};
