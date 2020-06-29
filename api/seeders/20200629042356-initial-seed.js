const models = require('../infrastructure/sequelize.context');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Skills',
      [
        {
          id: 1,
          name: 'Winter sports',
          relatedSkills: [
            'Snowboarding',
            'Skiing'
          ],
        },
        {
          id: 2,
          name: 'Snowboarding',
          relatedSkills: [
            'Skiing'
          ],
        },
        {
          id: 3,
          name: 'Gymnastics',
        },
        {
          id: 4,
          name: 'Skiing',
          relatedSkills: [
            'Snowboarding',
          ],
        },
        {
          id: 5,
          name: 'Cycling',
        },
      ], {});

    await queryInterface.bulkInsert('Athletes',
      [
        {
          id: 1,
          name: 'Anna Gasser',
          birthDate: new Date('1991-08-16'),
        },
        {
          id: 2,
          name: 'Tess Ledeux',
          birthDate: new Date('2001-11-23'),
        },
        {
          id: 3,
          name: 'Nairo Quintana',
          birthDate: new Date('1990-02-04'),
        },
      ], {});

    await queryInterface.bulkInsert('AthleteChampionships',
      [
        { athleteId: 1, name: 'World Snowboard Tour', year: new Date('2010-01-01') },
        { athleteId: 1, name: 'World Snowboard Tour', year: new Date('2011-01-01') },
        { athleteId: 1, name: 'FIS Snowboarding World', year: new Date('Championship 2013-01-01') },
        { athleteId: 1, name: 'Winter Olympics', year: new Date('2014-01-01') },
        { athleteId: 1, name: 'FIS Snowboarding World Championship', year: new Date('2015-01-01') },
        { athleteId: 1, name: 'FIS Snowboarding World Championship', year: new Date('2016-01-01') },
        { athleteId: 1, name: 'FIS Snowboarding World Championship', year: new Date('2017-01-01') },

        { athleteId: 2, name: 'FIS race', year: new Date('2016-01-01') },
        { athleteId: 2, name: 'FIS Freestyle World Championship', year: new Date('2017-01-01') },

        { athleteId: 3, name: 'Route du Sud', year: new Date('2012-01-01') },
        { athleteId: 3, name: 'Tour of the Basque Country', year: new Date('2013-01-01') },
        { athleteId: 3, name: 'Tour de France', year: new Date('2014-01-01') },
        { athleteId: 3, name: 'Tour de France', year: new Date('2015-01-01') },
        { athleteId: 3, name: 'Tour de France', year: new Date('2016-01-01') },
      ], {});

    await queryInterface.bulkInsert('AthleteSkills',
      [
        { skillId: 1, athleteId: 1 },
        { skillId: 2, athleteId: 1 },
        { skillId: 3, athleteId: 1 },

        { skillId: 4, athleteId: 2 },

        { skillId: 5, athleteId: 3 },
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Athletes', null, {});
    await queryInterface.bulkDelete('Skills', null, {});
  }
};
