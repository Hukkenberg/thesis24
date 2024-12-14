const { LabResult } = require('../models');

exports.getPendingTests = async (req, res) => {
  try {
    const tests = await LabResult.findAll({ where: { status: 'pending' } });
    res.json(tests);
  } catch (error) {
    res.status(500).send('Lỗi khi lấy danh sách xét nghiệm.');
  }
};

exports.updateLabResult = async (req, res) => {
  try {
    const { result } = req.body;
    const { testId } = req.params;
    await LabResult.update(
      { result, status: 'completed' },
      { where: { id: testId } }
    );
    res.status(200).send('Cập nhật kết quả xét nghiệm thành công.');
  } catch (error) {
    res.status(500).send('Lỗi khi cập nhật kết quả xét nghiệm.');
  }
};