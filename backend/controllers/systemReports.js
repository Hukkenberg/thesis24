const Appointment = require('../models/appointments');
const LabResult = require('../models/labResults');
const Prescription = require('../models/prescriptions');

exports.getSummaryReport = async (req, res) => {
  try {
    const appointments = await Appointment.count();
    const labResults = await LabResult.count();
    const prescriptions = await Prescription.count();

    const report = {
      totalAppointments: appointments,
      totalLabResults: labResults,
      totalPrescriptions: prescriptions,
    };

    res.json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};