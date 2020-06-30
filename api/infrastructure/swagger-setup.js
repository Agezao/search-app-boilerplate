const expressSwaggerGenerator = require('express-swagger-generator');

const swaggerSetup = (app) => {
  const expressSwagger = expressSwaggerGenerator(app);
  const options = {
    swaggerDefinition: {
      info: {
        title: 'SearchApp API',
        description: 'Main gateway to in-out data of the SearchApp',
        version: 'v1',
      },
      produces: ['application/json'],
      consumes: ['application/json'],
      schemes: ['http', 'https'],
    },
    route: {
      url: '/api/api-docs',
      docs: '/api-docs.json',
    },
    basedir: __dirname,
    files: ['../routes/**/*.js'],
  };
  expressSwagger(options);
};

module.exports = swaggerSetup;
