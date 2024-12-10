const Patient = require('../models/Patient');

exports.getPatients = async (req, res) => {
  try {
    const doctorId = req.user.id;
    const patients = await Patient.find({ doctorId });
    res.status(200).json(patients);
  } catch (err) {
    res.status(500).json({ error: 'Lỗi khi tải danh sách bệnh nhân.' });
  }
};

exports.updateDiagnosis = async (req, res) => {
  try {
    const { id } = req.params;
    const { diagnosis } = req.body;
    await Patient.findByIdAndUpdate(id, { diagnosis });
    res.status(200).json({ message: 'Diagnosis updated successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update diagnosis.' });
  }
};
