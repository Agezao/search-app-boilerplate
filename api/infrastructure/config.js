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
    'address': getEnvVar('DATABASE_ADDRESS', ""),
    'user': getEnvVar('DATABASE_USER', ""),
    'password': getEnvVar('DATABASE_PASSWORD', ""),
    'name': getEnvVar('DATABASE_NAME', ""),
  },
};

module.exports = { ...config };
