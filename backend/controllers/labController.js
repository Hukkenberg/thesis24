
const LabTest = require('../models/LabTest');

exports.getAllLabTests = async (req, res) => {
    const labTests = await LabTest.getAll();
    res.json(labTests);
};

exports.getLabTestById = async (req, res) => {
    const labTest = await LabTest.getById(req.params.id);
    if (!labTest) return res.status(404).json({ message: 'Lab test not found' });
    res.json(labTest);
};
