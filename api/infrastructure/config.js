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
  'database': {
    'host': getEnvVar('DATABASE_HOST', "localhost"),
    'port': getEnvVar('DATABASE_PORT', "5432"),
    'user': getEnvVar('DATABASE_USER', "development"),
    'password': getEnvVar('DATABASE_PASSWORD', "devdatabase"),
    'database': getEnvVar('DATABASE_NAME', "search-app"),
  },
};

module.exports = { ...config };
