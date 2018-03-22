require('dotenv').config();
const webpack = require('webpack');
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

const webpackDefinePlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production')
});

let config;
switch (process.env.NODE_ENV) {
  case 'production':
    config = merge(
      common,
      { devtool: 'source-map' },
      { plugins: [webpackDefinePlugin] }
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
