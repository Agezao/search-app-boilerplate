const express = require('express');
const Validator = require('../infrastructure/validator');
const responseFactory = require('../factories/response.factory');
const AthleteBusiness = require('../business/athlete.business');
const errorCodes = require('../enums/error-codes.enum');
const athleteValidator = require('../validations/athlete.validation');

const router = express.Router();

router.route('/')
  /**
   * Get athletes via search params
   * @group Athletes - Operations to manipulate Athletes
   * @operationId athletesGet
   * @route GET /athletes
   * @produces application/json
   * @param {string} name.query - Athlete's name
   * @param {string} ageRangeStart.query - Athlete's age range start
   * @param {string} ageRangeEnd.query - Athlete's age range end
   * @param {Array.<string>} skills.query - Athlete's skills
   * @param {number} professionalExperienceYears.query - Athlete's years of professional experience
   * @returns {Array.<Athlete>} 200 - Athletes
   * @returns {Response.model}  default - Unexpected error
   */
  .get(async (req, res, next) => {
    try {
      const params = Validator.validate(req.query, athleteValidator.query, errorCodes.ATHLETES.INVALID_SEARCH_PARAMS);

      if (params.ageRangeStart) params.ageRangeStart = new Date(new Date().setFullYear(new Date().getFullYear() - params.ageRangeStart));
      if (params.ageRangeEnd) params.ageRangeEnd = new Date(new Date().setFullYear(new Date().getFullYear() - (params.ageRangeEnd + 1)));
      if (params.professionalExperienceYears) params.professionalExperienceYears = `${new Date().getFullYear() - params.professionalExperienceYears}-01-01`;

      const athletes = await AthleteBusiness.get({ ...params });

      res.json(responseFactory.success(athletes));
    } catch (e) {
      next(e);
    }
  });

module.exports = router;
