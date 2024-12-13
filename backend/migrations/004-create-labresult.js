module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('lab_results', {
          id: {
              type: Sequelize.UUID,
              defaultValue: Sequelize.fn('gen_random_uuid'),
              primaryKey: true,
          },
          patient_id: {
              type: Sequelize.UUID,
              allowNull: false,
              references: {
                  model: 'patients',
                  key: 'id',
              },
              onDelete: 'CASCADE',
          },
          test_type: {
              type: Sequelize.STRING,
              allowNull: false,
          },
          result: {
              type: Sequelize.TEXT,
              allowNull: true,
          },
          status: {
              type: Sequelize.STRING,
              defaultValue: 'pending',
          },
          created_at: {
              type: Sequelize.DATE,
              defaultValue: Sequelize.fn('NOW'),
          },
          updated_at: {
              type: Sequelize.DATE,
              defaultValue: Sequelize.fn('NOW'),
          },
      });
  },
  down: async (queryInterface) => {
      await queryInterface.dropTable('lab_results');
  },
};
