const LabResult = require('../models/LabResult');

exports.getLabResults = async (req, res) => {
  try {
    const labResults = await LabResult.find({}).populate('patientId', 'name age').populate('labTechnicianId', 'name');
    res.status(200).json(labResults);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch lab results' });
  }
};

exports.updateLabResult = async (req, res) => {
  try {
    const { id } = req.params;
    const { result } = req.body;
    const labResult = await LabResult.findByIdAndUpdate(id, { result }, { new: true }).populate('patientId', 'name');
    if (!labResult) {
      return res.status(404).json({ error: 'Lab result not found' });
    }
    res.status(200).json(labResult);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update lab result' });
  }
};
