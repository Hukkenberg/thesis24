
const Patient = require('../models/Patient');

const getPatientsByDoctor = async (doctorId) => {
    return await Patient.findAll({ where: { doctorId } });
};

module.exports = {
    getPatientsByDoctor,
};
