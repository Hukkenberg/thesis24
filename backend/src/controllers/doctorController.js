const Doctor = require('../models/Doctor');
const Patient = require('../models/Patient');

// Lấy danh sách bệnh nhân được phân công
exports.getPatientsByDoctor = async (req, res) => {
  try {
    const doctorId = req.user.id; // Lấy ID bác sĩ từ JWT
    const patients = await Patient.findAll({ where: { doctorId } });
    res.status(200).json({ patients });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Cập nhật chẩn đoán
exports.updateDiagnosis = async (req, res) => {
  try {
    const { patientId } = req.params;
    const { diagnosis, treatmentPlan } = req.body;
    const updatedPatient = await Patient.update(
      { diagnosis, treatmentPlan },
      { where: { id: patientId }, returning: true }
    );
    res.status(200).json({ message: 'Diagnosis updated successfully', patient: updatedPatient });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Lấy lịch sử tiến trình bệnh nhân
exports.getPatientHistory = async (req, res) => {
  try {
    const { patientId } = req.params;
    const patient = await Patient.findOne({ where: { id: patientId } });
    if (!patient) return res.status(404).json({ message: 'Patient not found' });
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
