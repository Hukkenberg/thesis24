const { Patient, Appointment, LabResult } = require('../models');

exports.getPatientInfo = async (req, res) => {
  try {
    const patient = await Patient.findOne({ where: { user_id: req.user.id } });
    res.json(patient);
  } catch (error) {
    res.status(500).send('Lỗi khi lấy thông tin bệnh nhân.');
  }
};

exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.findAll({ where: { patient_id: req.user.id } });
    res.json(appointments);
  } catch (error) {
    res.status(500).send('Lỗi khi lấy danh sách lịch khám.');
  }
};

exports.getLabResults = async (req, res) => {
  try {
    const labResults = await LabResult.findAll({ where: { patient_id: req.user.id } });
    res.json(labResults);
  } catch (error) {
    res.status(500).send('Lỗi khi lấy kết quả xét nghiệm.');
  }
};

exports.updatePatientInfo = async (req, res) => {
  try {
    const { age, gender, medical_history, symptoms } = req.body;
    await Patient.update(
      { age, gender, medical_history, symptoms },
      { where: { user_id: req.user.id } }
    );
    res.status(200).send('Cập nhật thông tin thành công.');
  } catch (error) {
    res.status(500).send('Lỗi khi cập nhật thông tin.');
  }
};