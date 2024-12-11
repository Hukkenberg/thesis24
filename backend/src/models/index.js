const { Sequelize } = require('sequelize');
const Appointment = require('./appointment');
const Patient = require('./patient');
const Doctor = require('./doctor');

Patient.hasMany(Appointment, { foreignKey: 'patientId' });
Doctor.hasMany(Appointment, { foreignKey: 'doctorId' });
Appointment.belongsTo(Patient, { foreignKey: 'patientId' });
Appointment.belongsTo(Doctor, { foreignKey: 'doctorId' });

module.exports = {
    Appointment,
    Patient,
    Doctor,
};
