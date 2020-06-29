const models = require('../models');

const get = async () => {
  return models.Athlete.findAll({
      include: [
        { model: models.Skill, as: 'skills' },
        { model: models.AthleteChampionship, as: 'championships' },
      ]
    });
}

module.exports = {
  get,
};
