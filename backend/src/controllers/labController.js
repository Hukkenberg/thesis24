const LabResult = require('../models/LabResult');

exports.getAllLabReports = async (req, res) => {
    try {
        const labReports = await LabResult.findAll();
        res.status(200).json(labReports);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve lab reports' });
    }
};

exports.getLabReportById = async (req, res) => {
    try {
        const { id } = req.params;
        const labReport = await LabResult.findByPk(id);
        if (!labReport) {
            return res.status(404).json({ error: 'Lab report not found' });
        }
        res.status(200).json(labReport);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve lab report' });
    }
};

exports.createLabReport = async (req, res) => {
    try {
        const { patientId, testName, result } = req.body;
        const newLabReport = await LabResult.create({ patientId, testName, result });
        res.status(201).json(newLabReport);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create lab report' });
    }
};

exports.updateLabReport = async (req, res) => {
    try {
        const { id } = req.params;
        const { testName, result } = req.body;
        const [updated] = await LabResult.update(
            { testName, result },
            { where: { id }, returning: true }
        );
        if (updated === 0) {
            return res.status(404).json({ error: 'Lab report not found' });
        }
        const updatedLabReport = await LabResult.findByPk(id);
        res.status(200).json(updatedLabReport);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update lab report' });
    }
};

exports.deleteLabReport = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await LabResult.destroy({ where: { id } });
        if (!deleted) {
            return res.status(404).json({ error: 'Lab report not found' });
        }
        res.status(200).json({ message: 'Lab report deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete lab report' });
    }
};
