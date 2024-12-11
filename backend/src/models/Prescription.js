const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Prescription = sequelize.define('Prescription', {
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
    medications: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    notes: {
        type: DataTypes.TEXT,
    },
    status: {
        type: DataTypes.ENUM('active', 'completed', 'canceled'),
        defaultValue: 'active',
    },
});

module.exports = Prescription;
