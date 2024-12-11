const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Appointment = sequelize.define('Appointment', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    patientId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: { model: 'Patients', key: 'id' },
    },
    doctorId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: { model: 'Doctors', key: 'id' },
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('scheduled', 'completed', 'canceled'),
        defaultValue: 'scheduled',
    },
});

module.exports = Appointment;
