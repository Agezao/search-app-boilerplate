const express = require('express');

const athletesRoutes = require('./athletes.route');

const router = express.Router();

router.get(`/`, (req, res) => res.send('Documentation at /api-docs'));

router.use('/athletes', athletesRoutes);

router.get(`/*`, (req, res) => {
  res.status(404).send('Route not found')
});

module.exports = router;
