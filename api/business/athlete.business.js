const {gte, or, lte, contains, in: opIn, like} = require('sequelize').Op;
const models = require('../models');

const get = async ({
  name,
  ageRangeStart,
  ageRangeEnd,
  skills,
  professionalExperienceYears,
} = {}) => {

  const where = { };
  const whereSkills = { };

  if (name) where.name = { [like]: `%${name}%` };

  if (ageRangeStart || ageRangeEnd) where.birthDate = {};

  if (ageRangeStart) where.birthDate = { ...where.birthDate, [lte]: ageRangeStart };

  if (ageRangeEnd) where.birthDate = { ...where.birthDate, [gte]: ageRangeEnd };

  if (skills) {
    whereSkills[or] = [
      { "$skills.name$": { [opIn]: skills } },
      { "$skills.superset$": { [opIn]: skills } }
    ];
  }

  if (professionalExperienceYears) where.firstProfessionalExperienceDate = { [lte]: professionalExperienceYears };

  const includeFactory = (whereSkills) => [
    { model: models.Skill, as: 'skills', where: whereSkills },
    { model: models.AthleteChampionship, as: 'championships' },
  ];

  const athleteIds = (await models.Athlete.findAll({
      attributes: ['id'],
      include: includeFactory(whereSkills),
      where 
    })).map(a => a.id);

  return models.Athlete.findAll({
    include: includeFactory(),
    where: {
      "id": { [opIn]: athleteIds }
    },
  });
}

module.exports = {
  get,
};
