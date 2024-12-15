
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgresql://thesis24_user:fj6Dt3g0yF9h0FNzG267ozLqP1eFRJXg@dpg-ctejt8btq21c73bkgb9g-a.singapore-postgres.render.com/thesis24_database', {
  dialect: 'postgres',
  logging: false, // Disable logging for cleaner console output
});

module.exports = sequelize;
