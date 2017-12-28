const path = require('path');
// We define some paths to be used throughout the webpack config
module.exports = {
  src: path.resolve('./client/src', 'index.js'),
  dist: path.join(__dirname, 'client/dist'),
  css: path.join(__dirname, 'client/dist/css')
};
