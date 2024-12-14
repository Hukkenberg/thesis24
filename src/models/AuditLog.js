const { DataTypes, Model } = require('sequelize');

class AuditLog extends Model {
  static initModel(sequelize) {
    AuditLog.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        user_id: {
          type: DataTypes.UUID,
          allowNull: false,
        },
        action: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        details: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: 'AuditLog',
        timestamps: true,
        tableName: 'audit_logs',
      }
    );
  }
}

module.exports = AuditLog;