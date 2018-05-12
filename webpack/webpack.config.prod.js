const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackConfigBase = require('./webpack.config.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// postcss plugins
const postcssImport = require('postcss-import');
const stylelint = require('stylelint');
const postcssReporter = require('postcss-reporter');
const postcssCssnext = require('postcss-cssnext');
const postcssNested = require('postcss-nested');
const postcssRemoveRoot = require('postcss-remove-root');
const postcssResponsiveType = require('postcss-responsive-type');
const cssMqpacker = require('css-mqpacker');
const cssnano = require('cssnano');

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
              plugins: () => [
                postcssImport,
                stylelint(),
                postcssReporter(),
                postcssCssnext({
                  features: {
                    autoprefixer: {
                      grid: false
                    }
                  }
                }),
                postcssResponsiveType,
                postcssNested,
                postcssRemoveRoot,
                cssMqpacker({
                  sort: true
                }),
                cssnano({
                  autoprefixer: false,
                  safe: true
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
    })
  ]
});
