
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const User = require('./User');

const Patient = sequelize.define('Patient', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  medicalHistory: {
    type: DataTypes.TEXT,
  },
  progressNotes: {
    type: DataTypes.TEXT,
  },
}, { timestamps: true });

Patient.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });

module.exports = Patient;
