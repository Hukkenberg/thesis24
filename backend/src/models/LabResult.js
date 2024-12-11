const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const LabResult = sequelize.define('LabResult', {
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
    testType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    result: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.ENUM('pending', 'completed', 'requested'),
        defaultValue: 'pending',
    },
    reason: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
});

module.exports = LabResult;
