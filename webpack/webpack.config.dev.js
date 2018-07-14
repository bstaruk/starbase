const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
    filename: '[name].js'
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
              sourceMap: 'inline',
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
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    port: 8080,
    watchOptions: {
      poll: 1000
    },
    stats: {
      children: false
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
});
