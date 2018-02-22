const path = require('path');

module.exports = {
  src: path.resolve('./client/src', 'index.js'),
  dist: path.join(__dirname, 'client/dist'),
  css: path.join(__dirname, 'client/dist/css')
};
