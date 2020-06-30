const { DataTypes } = require('sequelize');
const config = require('../infrastructure/config');
const sequelizeContext = require('../infrastructure/sequelize.context');

const Skill = sequelizeContext.define('Skill',
  {
    name: DataTypes.STRING,
    superset: DataTypes.STRING,
  },
  {
    sequelize: sequelizeContext,
    ...config.sequelizeDefaults,
    tableName: 'Skills',
    name: { singular: 'skill', plural: 'skills' },
    timestamps: false,
  }
);

Skill.associate = function (models) {
  models.Skill.belongsToMany(models.Athlete, {
    through: models.AthleteSkill,
    as: 'athletes',
    foreignKey: 'skillId'
  });
};

module.exports = Skill;
