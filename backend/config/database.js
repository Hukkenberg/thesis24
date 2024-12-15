
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Allow self-signed certificates
    }
  },
  logging: false // Optional: Disable SQL logging in console
});

module.exports = sequelize;
