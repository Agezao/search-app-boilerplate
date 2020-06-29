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
    through: models.AthleteSkill,
    as: 'skills',
    foreignKey: 'athleteId'
  });

  models.Athlete.hasMany(models.AthleteChampionship, {
    as: 'championships',
    foreignKey: 'athleteId',
    onDelete: 'cascade',
  });
};

module.exports = Athlete;
