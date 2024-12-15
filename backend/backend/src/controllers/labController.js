const LabResult = require('../models/LabResult');

// Fetch pending lab results
exports.getPendingLabResults = async (req, res) => {
  try {
    const results = await LabResult.findAll({ where: { status: 'pending' } });
    res.status(200).json({ results });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update lab result
exports.updateLabResult = async (req, res) => {
  try {
    const { id } = req.params;
    const { result, status } = req.body;
    const updatedResult = await LabResult.update(
      { result, status },
      { where: { id }, returning: true }
    );
    res.status(200).json({ message: 'Lab result updated successfully', result: updatedResult });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mark abnormal lab results
exports.markAbnormalResults = async (req, res) => {
  try {
    const { id } = req.params;
    const labResult = await LabResult.findOne({ where: { id } });
    if (!labResult) {
      return res.status(404).json({ message: 'Lab result not found' });
    }
    const abnormal = labResult.result > 100; // Example abnormal threshold
    if (abnormal) {
      res.status(200).json({ message: 'Result is abnormal', abnormal: true });
    } else {
      res.status(200).json({ message: 'Result is normal', abnormal: false });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
