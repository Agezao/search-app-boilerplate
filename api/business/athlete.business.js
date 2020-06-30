const {gte, or, lte, contains, in: opIn, like} = require('sequelize').Op;
const models = require('../models');

const get = async ({
  name,
  ageRangeStart,
  ageRangeEnd,
  skills,
  professionalExperienceYears,
} = {}) => {

  const where = {
    birthDate: {},
  };

  if (name) where.name = { [like]: `%${name}%` };

  if (ageRangeStart) where.birthDate = { ...where.birthDate, [lte]: ageRangeStart };

  if (ageRangeEnd) where.birthDate = { ...where.birthDate, [gte]: ageRangeEnd };

  if (skills) {
    where[or] = [
      { "$skills.name$": { [opIn]: skills } },
      { "$skills.superset$": { [opIn]: skills } }
    ];
  }

  if (professionalExperienceYears) where.firstProfessionalExperienceDate = { [lte]: professionalExperienceYears };

  const include = [
    { model: models.Skill, as: 'skills' },
    { model: models.AthleteChampionship, as: 'championships' },
  ];

  return models.Athlete.findAll({
    include,
    where,
  });
}

module.exports = {
  get,
};
