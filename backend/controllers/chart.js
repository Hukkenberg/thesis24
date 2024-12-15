const LabResult = require('../models/labResults');

exports.getProgressChart = async (req, res) => {
  try {
    const { patientId } = req.params;
    const results = await LabResult.findAll({ where: { patientId } });
    // Dữ liệu giả lập để xuất biểu đồ
    const chartData = results.map(result => ({
      date: result.date,
      value: parseFloat(result.result)
    }));
    res.json(chartData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};