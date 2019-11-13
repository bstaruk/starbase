const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpackMerge = require('webpack-merge');

// postcss plugins
const cssMqpacker = require('css-mqpacker');
const postcssExtend = require('postcss-extend');
const postcssImport = require('postcss-import');
const postcssNested = require('postcss-nested');
const postcssPresetEnv = require('postcss-preset-env');
const postcssRemoveRoot = require('postcss-remove-root');
const postcssReporter = require('postcss-reporter');
const stylelint = require('stylelint');

// import base config
const webpackConfigBase = require('./webpack.config.base.js');

module.exports = webpackMerge(webpackConfigBase, {
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    port: 8080,
    stats: {
      children: false
    }
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { importLoaders: 1 }
        },
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            sourceMap: 'inline',
            plugins: () => [
              stylelint(),
              postcssReporter(),
              postcssImport({
                path: [path.resolve(__dirname, '../src')],
              }),
              postcssNested(),
              postcssPresetEnv({
                stage: 1,
                features: {
                  'custom-properties': {
                    preserve: false
                  },
                  'custom-media': {
                    preserve: false
                  }
                }
              }),
              postcssExtend(),
              postcssRemoveRoot(),
              cssMqpacker({
                sort: true
              })
            ]
          }
        }
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
});
