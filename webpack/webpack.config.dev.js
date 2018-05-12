const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackConfigBase = require('./webpack.config.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// postcss plugins
const postcssImport = require('postcss-import');
const stylelint = require('stylelint');
const postcssReporter = require('postcss-reporter');
const postcssCssnext = require('postcss-cssnext');
const postcssNested = require('postcss-nested');
const postcssRemoveRoot = require('postcss-remove-root');
const postcssResponsiveType = require('postcss-responsive-type');
const postcssExtend = require('postcss-extend');
const cssMqpacker = require('css-mqpacker');

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
              sourceMap: 'inline',
              plugins: () => [
                stylelint(),
                postcssReporter(),
                postcssImport(),
                postcssNested(),
                postcssCssnext({
                  features: {
                    autoprefixer: {
                      grid: false
                    }
                  }
                }),
                postcssResponsiveType(),
                postcssExtend(),
                postcssRemoveRoot(),
                cssMqpacker({
                  sort: true
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
