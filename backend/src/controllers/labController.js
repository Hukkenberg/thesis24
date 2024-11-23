const LabTest = require("../models/LabTest");

exports.getLabTests = async (req, res) => {
  const tests = await LabTest.findAll();
  res.json(tests);
};

exports.updateLabTest = async (req, res) => {
  const { id, result, status } = req.body;
  await LabTest.update({ result, status }, { where: { id } });
  res.json({ message: "Cập nhật kết quả xét nghiệm thành công." });
};
