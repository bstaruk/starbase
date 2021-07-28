const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');

// import base config
const webpackConfigBase = require('./webpack.config.base');

module.exports = merge(webpackConfigBase, {
  mode: 'production',
  output: {
    filename: '[name]-[fullhash:8].js',
  },
  plugins: [new CleanWebpackPlugin()],
});
