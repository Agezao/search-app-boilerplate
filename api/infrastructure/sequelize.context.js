const Sequelize = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize({
  ...config.database,
  dialect: 'postgres',
  operatorsAliases: '0'
});

module.exports = sequelize;
