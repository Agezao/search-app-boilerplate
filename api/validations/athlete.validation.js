const Joi = require('joi');

module.exports = {
  query: {
    name: Joi.string().allow(null),
    ageRangeStart: Joi.number().integer().allow(null),
    ageRangeEnd: Joi.number().integer().allow(null),
    skills: Joi.array().items(Joi.string()).allow(null),
    professionalExperienceYears: Joi.number().integer().allow(null),
  },
};
