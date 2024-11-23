const LabTest = require("../models/LabTest");

exports.getAllLabTests = async (req, res) => {
  try {
    const labTests = await LabTest.findAll();
    res.status(200).json(labTests);
  } catch (error) {
    res.status(500).json({ message: "Error fetching lab tests", error });
  }
};

exports.createLabTest = async (req, res) => {
  try {
    const labTest = await LabTest.create(req.body);
    res.status(201).json(labTest);
  } catch (error) {
    res.status(500).json({ message: "Error creating lab test", error });
  }
};
