require('dotenv').config();

console.log(process.env.DATABASE_URL);

module.exports = {
  development: {
    username: 'postgres',
    password: 'teleios',
    database: 'more-recipes',
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
    username: 'msuerivuccucve',
    password: '8212682f93a6ee5c73e571578b090fb12884c902c061ed922832670d2fc8452e',
    database: '',
    host: 'ec2-54-235-150-134.compute-1.amazonaws.com:5432/d9k55gp0fgg32q',
    dialect: 'postgres',
  },
};
