const LabTest = require("../models/LabTest");

exports.getAllLabTests = async (req, res) => {
  const labTests = await LabTest.findAll();
  res.status(200).json(labTests);
};

exports.getLabTestById = async (req, res) => {
  const labTest = await LabTest.findByPk(req.params.id);
  if (!labTest) {
    return res.status(404).json({ message: "Lab test not found" });
  }
  res.status(200).json(labTest);
};

exports.createLabTest = async (req, res) => {
  const labTest = await LabTest.create(req.body);
  res.status(201).json(labTest);
};

exports.updateLabTest = async (req, res) => {
  const labTest = await LabTest.findByPk(req.params.id);
  if (!labTest) {
    return res.status(404).json({ message: "Lab test not found" });
  }
  await labTest.update(req.body);
  res.status(200).json(labTest);
};

exports.deleteLabTest = async (req, res) => {
  const labTest = await LabTest.findByPk(req.params.id);
  if (!labTest) {
    return res.status(404).json({ message: "Lab test not found" });
  }
  await labTest.destroy();
  res.status(204).send();
};
