const Sequelize = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize({
  ...config.database,
  dialect: 'postgres',
  operatorsAliases: false
});

module.exports = sequelize;
