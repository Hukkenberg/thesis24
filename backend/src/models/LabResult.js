
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const LabResult = sequelize.define('LabResult', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    patientId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Patients',
            key: 'id',
        },
        onDelete: 'CASCADE',
    },
    testType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    result: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    testDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    timestamps: true,
});

module.exports = LabResult;
