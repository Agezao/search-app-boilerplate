const { DataTypes } = require('sequelize');
const config = require('../infrastructure/config');
const sequelizeContext = require('../infrastructure/sequelize.context');

const Skill = sequelizeContext.define('Skill',
  {
    name: DataTypes.STRING,
    relatedSkills: DataTypes.ARRAY(DataTypes.STRING),
  },
  {
    sequelize: sequelizeContext,
    ...config.sequelizeDefaults,
    tableName: 'Skills',
    name: { singular: 'skill', plural: 'skills' },
  }
);

Skill.associate = function (models) {
  models.Skill.belongsToMany(models.Athlete, {
    through: 'AthleteSkills',
    as: 'athletes',
    foreignKey: 'skillId'
  });
};

module.exports = Skill;
