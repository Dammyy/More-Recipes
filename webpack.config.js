require('dotenv').config();
const merge = require('webpack-merge');
const PATHS = require('./webpack-paths');
const loaders = require('./webpack-loaders');

const common = {
  entry: {
    app: ['babel-polyfill', PATHS.src]
  },
  output: {
    path: PATHS.dist,
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      loaders.babel,
      loaders.css,
      loaders.font,
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
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
        port: process.env.PORT,
      })
    );
    break;
  default:
    config = merge(
      common,
      { devtool: 'eval-source-map' },
      loaders.devServer({
        host: process.env.HOST,
        port: process.env.PORT,
      })
    );
}

module.exports = config;
