const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres', // or 'mysql', etc., depending on your DB
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Use false if the server certificate is self-signed
    },
  },
  logging: false, // Disable logging in production for cleaner output
});

module.exports = sequelize;
