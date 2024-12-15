const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ensure the correct path to your database config

const Doctor = sequelize.define('Doctor', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  specialty: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
}, {
  tableName: 'doctors',
  timestamps: false, // Adjust if your table uses timestamps
});

module.exports = Doctor;
