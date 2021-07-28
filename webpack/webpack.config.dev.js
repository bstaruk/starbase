const path = require('path');
const { merge } = require('webpack-merge');

// import base config
const webpackConfigBase = require('./webpack.config.base');

module.exports = merge(webpackConfigBase, {
  mode: 'development',
  output: {
    filename: '[name].js',
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(process.cwd(), 'dist'),
    port: 8080,
    stats: {
      children: false,
    },
  },
});
