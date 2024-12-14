const { DataTypes, Model } = require('sequelize');

class Prescription extends Model {
  static initModel(sequelize) {
    Prescription.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        patient_id: {
          type: DataTypes.UUID,
          allowNull: false,
        },
        doctor_id: {
          type: DataTypes.UUID,
          allowNull: false,
        },
        medications: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        notes: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: 'Prescription',
        timestamps: true,
        tableName: 'prescriptions',
      }
    );
  }
}

module.exports = Prescription;