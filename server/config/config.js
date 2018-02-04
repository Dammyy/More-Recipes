require('dotenv').config();

console.log(process.env.DATABASE_URL);

module.exports = {
  development: {
    username: 'root',
    password: 'rootpass',
    database: 'More-Recipes',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
};
