const express = require('express');
const responseFactory = require('../factories/response.factory');
const AthleteBusiness = require('../business/athlete.business');

const router = express.Router();

router.route('/')
  /**
   * Get athletes via search params
   * @group Athletes - Operations to manipulate Athletes
   * @operationId athletesGet
   * @route GET /athletes
   * @produces application/json
   * @param {string} query.query - The search query
   * @returns {Array.<Athlete>} 200 - Athletes
   * @returns {Response.model}  default - Unexpected error
   */
  .get(async (req, res, next) => {
    try {
      const athletes = await AthleteBusiness.get();

      res.json(responseFactory.success(athletes));
    } catch (e) {
      next(e);
    }
  });

module.exports = router;
