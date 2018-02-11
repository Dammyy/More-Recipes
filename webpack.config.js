require('dotenv').config();
const merge = require('webpack-merge');
const PATHS = require('./webpack-paths');
const loaders = require('./webpack-loaders');

process.env.NODE_ENV = 'development';
// process.env.NODE_ENV = 'build';

const common = {
  entry: {
    app: ['babel-polyfill', PATHS.src]
  },
  output: {
    path: PATHS.dist,
    filename: 'bundle.js',
    publicPath: '/client/dist/'
  },
  module: {
    rules: [
      loaders.babel,
      loaders.css,
      loaders.font,
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

let config;
switch (process.env.NODE_ENV) {
  case 'build':
    config = merge(
      common,
      { devtool: 'source-map' }
    );
    break;
  case 'development':
    config = merge(
      common,
      { devtool: 'eval-source-map' },
      loaders.devServer({
        host: process.env.HOST,
        port: process.env.PORT
      })
    );
    break;
  default:
    config = console.log('no value supplied');
    console.log(process.env.NODE_ENV);
}

module.exports = config;
