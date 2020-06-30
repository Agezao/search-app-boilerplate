const getEnvVar = (property, defaultValue) => {
  const value = process.env[property];

  if (value === undefined || value === null) {
    if (defaultValue) return defaultValue;

    throw new Error(`Environment variable ${property} was not provided.`);
  }

  return value;
};

const config = {
  'env': getEnvVar('NODE_ENV', 'dev'),
  'port': getEnvVar('PORT', '8080'),
  'sequelizeDefaults': {
    'freezeTableName': true,
  },
  'database': {
    'host': getEnvVar('DB_HOST', "localhost"),
    'port': getEnvVar('DB_PORT', "5432"),
    'username': getEnvVar('DB_USER', "development"),
    'password': getEnvVar('DB_PASSWORD', "devdatabase"),
    'database': getEnvVar('DB_NAME', "search-app"),
  },
  'production': { // db-config for sequelize migrations
    'host': getEnvVar('DB_HOST', "database"),
    'port': getEnvVar('DB_PORT', "5432"),
    'username': getEnvVar('DB_USER', "development"),
    'password': getEnvVar('DB_PASSWORD', "devdatabase"),
    'database': getEnvVar('DB_NAME', "search-app"),
    "dialect": "postgres",
  },
};

module.exports = { ...config };
