const webpackMerge = require('webpack-merge');
const webpackConfigBase = require('./webpack.config.base.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pathsHelper = require('./lib/paths-helper');

// postcss plugins
const postcssImport = require('postcss-import');
const stylelint = require('stylelint');
const postcssReporter = require('postcss-reporter');
const postcssCssnext = require('postcss-cssnext');
const postcssNested = require('postcss-nested');
const postcssRemoveRoot = require('postcss-remove-root');
const postcssMqpacker = require('css-mqpacker');

module.exports = webpackMerge(webpackConfigBase, {
  output: {
    publicPath: '/assets'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: 'inline',
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
                  postcssNested,
                  postcssRemoveRoot,
                  postcssMqpacker({
                    sort: true
                  })
                ]
              }
            }
          ]
        })
      }
    ]
  },
  devServer: {
    contentBase: pathsHelper('static'),
    port: 8080,
    watchOptions: {
      poll: 1000
    },
    stats: {
      children: false
    }
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
});
