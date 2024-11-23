const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const LabTest = sequelize.define("LabTest", {
  patientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  testType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  result: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "pending", // pending, completed
  },
});

module.exports = LabTest;
