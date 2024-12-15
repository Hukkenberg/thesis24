
const Patient = require('../models/Patient');

const getPatientDetails = async (id) => {
    const patient = await Patient.findByPk(id);
    if (!patient) throw new Error('Patient not found');
    return patient;
};

module.exports = {
    getPatientDetails,
};
