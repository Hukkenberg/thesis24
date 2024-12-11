const { sequelize } = require('../config/db');
const Appointment = require('./Appointment');
const Patient = require('./Patient');
const Doctor = require('./Doctor');
const LabResult = require('./LabResult');
const Prescription = require('./Prescription');

Patient.hasMany(Appointment, { foreignKey: 'patientId' });
Doctor.hasMany(Appointment, { foreignKey: 'doctorId' });
Appointment.belongsTo(Patient, { foreignKey: 'patientId' });
Appointment.belongsTo(Doctor, { foreignKey: 'doctorId' });

module.exports = {
    sequelize,
    Appointment,
    Patient,
    Doctor,
    LabResult,
    Prescription,
};
