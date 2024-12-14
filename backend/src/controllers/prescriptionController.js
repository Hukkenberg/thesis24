const { Prescription } = require('../models');

exports.getPrescriptions = async (req, res) => {
  try {
    const prescriptions = await Prescription.findAll({ where: { patient_id: req.query.patient_id } });
    res.json(prescriptions);
  } catch (error) {
    res.status(500).send('Lỗi khi lấy danh sách đơn thuốc.');
  }
};

exports.createPrescription = async (req, res) => {
  try {
    const { patient_id, doctor_id, medications, notes } = req.body;
    const prescription = await Prescription.create({ patient_id, doctor_id, medications, notes });
    res.status(201).json(prescription);
  } catch (error) {
    res.status(500).send('Lỗi khi tạo đơn thuốc.');
  }
};