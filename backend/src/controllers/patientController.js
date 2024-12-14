const Patient = require('../models/Patient');

// Lấy danh sách tất cả bệnh nhân
exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.findAll();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ error: 'Không thể tải danh sách bệnh nhân' });
  }
};

// Tạo mới một bệnh nhân
exports.createPatient = async (req, res) => {
  try {
    const { name, age, gender, diagnosis, doctorId } = req.body;
    const newPatient = await Patient.create({
      name,
      age,
      gender,
      diagnosis,
      doctorId,
    });
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(500).json({ error: 'Không thể tạo bệnh nhân mới' });
  }
};

// Cập nhật thông tin bệnh nhân
exports.updatePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, gender, diagnosis } = req.body;
    const [updated] = await Patient.update(
      { name, age, gender, diagnosis },
      { where: { id }, returning: true }
    );
    if (!updated) {
      return res.status(404).json({ error: 'Bệnh nhân không tồn tại' });
    }
    const updatedPatient = await Patient.findByPk(id);
    res.status(200).json(updatedPatient);
  } catch (error) {
    res.status(500).json({ error: 'Không thể cập nhật thông tin bệnh nhân' });
  }
};

// Xóa một bệnh nhân
exports.deletePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Patient.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ error: 'Bệnh nhân không tồn tại' });
    }
    res.status(200).json({ message: 'Xóa bệnh nhân thành công' });
  } catch (error) {
    res.status(500).json({ error: 'Không thể xóa bệnh nhân' });
  }
};

// Lấy thông tin chi tiết của một bệnh nhân
exports.getPatientById = async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await Patient.findByPk(id);
    if (!patient) {
      return res.status(404).json({ error: 'Bệnh nhân không tồn tại' });
    }
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ error: 'Không thể tải thông tin bệnh nhân' });
  }
};

// Theo dõi tiến trình bệnh
exports.trackPatientProgress = async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await Patient.findByPk(id);
    if (!patient) {
      return res.status(404).json({ error: 'Bệnh nhân không tồn tại' });
    }
    const progress = await PatientProgress.findAll({ where: { patientId: id } });
    res.status(200).json(progress);
  } catch (error) {
    res.status(500).json({ error: 'Không thể theo dõi tiến trình bệnh' });
  }
};