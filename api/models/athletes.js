const { DataTypes } = require('sequelize');
const config = require('../infrastructure/config');
const sequelizeContext = require('../infrastructure/sequelize.context');

const Athlete = sequelizeContext.define('Athlete',
  {
    name: DataTypes.STRING,
    birthDate: DataTypes.DATEONLY,
  },
  {
    sequelize: sequelizeContext,
    ...config.sequelizeDefaults,
    tableName: 'Athletes',
    name: { singular: 'athlete', plural: 'athletes' },
  }
);

Athlete.associate = function (models) {
  models.Athlete.belongsToMany(models.Skill, {
    through: 'AthleteSkills',
    as: 'skills',
    foreignKey: 'athleteId'
  });
};

module.exports = Athlete;