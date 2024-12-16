
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.TEXT, allowNull: false },
    role: { type: DataTypes.STRING, defaultValue: 'patient' },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at', // Map Sequelize createdAt to snake_case
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at', // Map Sequelize updatedAt to snake_case
    },
  },
  {
    tableName: 'users', // Ensure table name matches
    timestamps: true,   // Use Sequelize timestamps
    underscored: true,  // Use snake_case for all auto-generated fields
  }
);

module.exports = User;
