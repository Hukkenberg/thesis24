const { Patient, LabResult } = require('../models');

exports.getPatients = async (req, res) => {
  try {
    const patients = await Patient.findAll({ where: { doctor_id: req.user.id } });
    res.json(patients);
  } catch (error) {
    res.status(500).send('Lỗi khi lấy danh sách bệnh nhân.');
  }
};

exports.updateTreatmentPlan = async (req, res) => {
  try {
    const { patientId, diagnosis, treatmentPlan } = req.body;
    await Patient.update(
      { diagnosis, treatment_plan: treatmentPlan },
      { where: { id: patientId } }
    );
    res.status(200).send('Cập nhật chẩn đoán và kế hoạch điều trị thành công.');
  } catch (error) {
    res.status(500).send('Lỗi khi cập nhật chẩn đoán.');
  }
};

exports.requestLabTest = async (req, res) => {
  try {
    const { patientId, testType } = req.body;
    await LabResult.create({
      patient_id: patientId,
      test_type: testType,
      status: 'requested',
    });
    res.status(200).send('Yêu cầu xét nghiệm đã được gửi.');
  } catch (error) {
    res.status(500).send('Lỗi khi yêu cầu xét nghiệm.');
  }
};