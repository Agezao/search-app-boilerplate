const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const config = require('./infrastructure/config');
const models = require('./models');
const routes = require('./routes');
const errorInterceptor = require('./interceptors/error.interceptor');
const swaggerSetup = require('./infrastructure/swagger-setup');

const app = express();

app.use(cors());

app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.disable('etag');

// Setting up api documentation
swaggerSetup(app);

// Routes
app.options(`*`, (req, res) => {
  res.status(200).send()
});

// API definition
app.use(routes);

// Error handling
app.use(errorInterceptor);

app.listen(config.port, () => {
  console.log(`Server started at port :${config.port}`);
});

module.exports = app;
