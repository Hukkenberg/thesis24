module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('patients', {
          id: {
              type: Sequelize.UUID,
              defaultValue: Sequelize.fn('gen_random_uuid'),
              primaryKey: true,
          },
          user_id: {
              type: Sequelize.UUID,
              allowNull: false,
              references: {
                  model: 'users',
                  key: 'id',
              },
              onDelete: 'CASCADE',
          },
          age: {
              type: Sequelize.INTEGER,
              allowNull: false,
          },
          gender: {
              type: Sequelize.STRING,
              allowNull: false,
          },
          diagnosis: {
              type: Sequelize.TEXT,
              allowNull: true,
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
      await queryInterface.dropTable('patients');
  },
};
