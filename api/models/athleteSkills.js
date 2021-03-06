const { DataTypes } = require('sequelize');
const config = require('../infrastructure/config');
const sequelizeContext = require('../infrastructure/sequelize.context');

const AthleteSkill = sequelizeContext.define('AthleteSkill',
  {
    athleteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Athlete',
        key: 'id'
      }
    },
    skillId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Skill',
        key: 'id'
      }
    },
  },
  {
    sequelize: sequelizeContext,
    ...config.sequelizeDefaults,
    tableName: 'AthleteSkills',
    name: { singular: 'athleteSkill', plural: 'athleteSkills' },
    timestamps: false,
  }
);

module.exports = AthleteSkill;
