

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./users');

const Patient = sequelize.define('Patient', {
  userId: { type: DataTypes.INTEGER, references: { model: User, key: 'id' } },
  dob: { type: DataTypes.DATE, allowNull: false },
  gender: { type: DataTypes.STRING, allowNull: false },
  address: { type: DataTypes.TEXT },
  contactNumber: { type: DataTypes.STRING },
}, {
  timestamps: true,
});

module.exports = Patient;