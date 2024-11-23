
const Doctor = require('../models/Doctor');

exports.getAllDoctors = async (req, res) => {
    const doctors = await Doctor.getAll();
    res.json(doctors);
};
