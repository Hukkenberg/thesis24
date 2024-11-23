const File = require("../models/File");

exports.uploadFile = async (req, res) => {
  const file = await File.create(req.body);
  res.status(201).json(file);
};

exports.getAllFiles = async (req, res) => {
  const files = await File.findAll();
  res.status(200).json(files);
};

exports.getFileById = async (req, res) => {
  const file = await File.findByPk(req.params.id);
  if (!file) {
    return res.status(404).json({ message: "File not found" });
  }
  res.status(200).json(file);
};

exports.deleteFile = async (req, res) => {
  const file = await File.findByPk(req.params.id);
  if (!file) {
    return res.status(404).json({ message: "File not found" });
  }
  await file.destroy();
  res.status(204).send();
};
