require('dotenv').config();

module.exports = {
  development: {
    username: 'postgres',
    password: 'andela',
    database: 'More-Recipes',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: 'postgres',
    password: 'andela',
    database: 'more-recipes-test',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
};
