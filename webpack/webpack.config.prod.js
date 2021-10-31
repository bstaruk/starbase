const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');

// import base config
const webpackConfigBase = require('./webpack.config.base');

module.exports = merge(webpackConfigBase, {
  mode: 'production',
  output: {
    filename: '[name]-[fullhash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]-[fullhash:8].css',
      chunkFilename: '[id]-[fullhash:8].css',
    }),
  ],
});
