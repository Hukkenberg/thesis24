const { jsPDF } = require('jspdf');
const LabResult = require('../models/labResults');
const Prescription = require('../models/prescriptions');

exports.generatePatientProgressReport = async (req, res) => {
  try {
    const { patientId } = req.params;

    const labResults = await LabResult.findAll({ where: { patientId } });
    const prescriptions = await Prescription.findAll({ where: { patientId } });

    const doc = new jsPDF();
    doc.text('Patient Progress Report', 10, 10);
    doc.text('Lab Results:', 10, 20);
    labResults.forEach((result, index) => {
      doc.text(`${index + 1}. ${result.testType}: ${result.result}`, 10, 30 + index * 10);
    });

    doc.text('Prescriptions:', 10, 50 + labResults.length * 10);
    prescriptions.forEach((prescription, index) => {
      doc.text(`${index + 1}. ${prescription.medicineList}`, 10, 60 + labResults.length * 10 + index * 10);
    });

    const pdfData = doc.output('arraybuffer');
    res.setHeader('Content-Type', 'application/pdf');
    res.send(Buffer.from(pdfData));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};