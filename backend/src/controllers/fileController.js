const File = require("../models/File");
const fs = require("fs");
const path = require("path");

exports.uploadFile = async (req, res) => {
  const { filename, originalname } = req.file;
  const file = await File.create({ filename, originalname });
  res.json(file);
};

exports.downloadFile = async (req, res) => {
  const file = await File.findByPk(req.params.id);
  if (!file) return res.status(404).json({ message: "File not found" });
  const filePath = path.join(__dirname, "../../uploads", file.filename);
  res.download(filePath);
};
