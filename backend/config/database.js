
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Allow SSL connections
    },
  },
  logging: console.log, // Enable query logging for debugging
});

module.exports = sequelize;
