require('dotenv').config();
const merge = require('webpack-merge');
const PATHS = require('./webpack-paths');
const loaders = require('./webpack-loaders');

process.env.NODE_ENV = 'development';
const common = {
  entry: { // The entry file is index.js in /client/src
    app: ['babel-polyfill', PATHS.src]
  },
  output: { // The output defines where the bundle output gets created
    path: PATHS.dist,
    filename: 'bundle.js',
    publicPath: '/client/dist/'
  },
  module: {
    rules: [
      loaders.babel, // Transpiler
      loaders.css, // Our bundle will contain the css 
      loaders.font, // Load fonts
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'] // the extensions to resolve
  }
};

let config;
// The switch defines the different configuration as development requires webpack-dev-server
switch (process.env.NODE_ENV) {
  case 'build':
    config = merge(
      common,
      { devtool: 'source-map' } // SourceMaps on separate file
    );
    break;
  case 'development':
    config = merge(
      common,
      { devtool: 'eval-source-map' }, // Default value
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

// We export the config
module.exports = config;
