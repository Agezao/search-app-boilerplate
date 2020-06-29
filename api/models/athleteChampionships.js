const { DataTypes } = require('sequelize');
const config = require('../infrastructure/config');
const sequelizeContext = require('../infrastructure/sequelize.context');

const AthleteChampionship = sequelizeContext.define('AthleteChampionship',
  {
    athleteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Athlete',
        key: 'id'
      }
    },
    name: DataTypes.STRING,
    year: DataTypes.DATEONLY,
  },
  {
    sequelize: sequelizeContext,
    ...config.sequelizeDefaults,
    tableName: 'AthleteChampionships',
    name: { singular: 'athleteChampionship', plural: 'AthleteChampionships' },
    timestamps: false,
  }
);

module.exports = AthleteChampionship;
