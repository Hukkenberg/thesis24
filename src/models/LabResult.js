const { DataTypes, Model } = require('sequelize');

class LabResult extends Model {
  static initModel(sequelize) {
    LabResult.init(
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
        test_type: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        result: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        status: {
          type: DataTypes.ENUM('pending', 'completed', 'requested'),
          defaultValue: 'pending',
        },
      },
      {
        sequelize,
        modelName: 'LabResult',
        timestamps: true,
        tableName: 'lab_results',
      }
    );
  }
}

module.exports = LabResult;