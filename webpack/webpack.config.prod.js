const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OfflinePlugin = require('offline-plugin');
const path = require('path');
const webpackMerge = require('webpack-merge');

// postcss plugins
const cssMqpacker = require('css-mqpacker');
const cssnano = require('cssnano');
const postcssExtend = require('postcss-extend');
const postcssImport = require('postcss-import');
const postcssNested = require('postcss-nested');
const postcssPresetEnv = require('postcss-preset-env');
const postcssRemoveRoot = require('postcss-remove-root');
const postcssReporter = require('postcss-reporter');
const postcssResponsiveType = require('postcss-responsive-type');
const stylelint = require('stylelint');

// import base config
const webpackConfigBase = require('./webpack.config.base.js');

module.exports = webpackMerge(webpackConfigBase, {
  output: {
    filename: '[name].[hash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                stylelint(),
                postcssReporter(),
                postcssImport(),
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
                postcssResponsiveType(),
                postcssExtend(),
                postcssRemoveRoot(),
                cssMqpacker({
                  sort: true
                }),
                cssnano({
                  preset: 'default'
                })
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash:8].css',
      chunkFilename: '[id].[hash:8].css'
    }),
    new CleanWebpackPlugin([
      'dist'
    ], {
      root: path.resolve(__dirname, '../')
    }),
    new OfflinePlugin({
      AppCache: false
    })
  ]
});
