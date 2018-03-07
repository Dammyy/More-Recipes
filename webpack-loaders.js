const webpack = require('webpack');

exports.devServer = (options) => {
  return {
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      stats: 'errors-only',
      host: options.host,
      port: options.port,
      contentBase: './client/dist',
      proxy: {
        '/api': 'http://localhost:3000'
      }
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin({
        multistep: true
      })
    ]
  };
};

exports.css = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
};

exports.font = {
  test: /\.ttf$/,
  use: ['file-loader']
};

exports.babel = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: ['babel-loader']
};
