const express = require('express');
const path = require('path');
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

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// API definition
app.use('/api', routes);

// Handles any requests that don't match the ones above to react app
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/build/index.html'));
});

// Error handling
app.use(errorInterceptor);

app.listen(config.port, () => {
  console.log(`Server started at port :${config.port}`);
});

module.exports = app;
