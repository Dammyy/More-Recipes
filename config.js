require('dotenv').config();

module.exports = {
  PORT: 3000,
  JWT_SECRET: process.env.JWT_SECRET
};
