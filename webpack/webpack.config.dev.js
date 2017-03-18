const webpackMerge = require('webpack-merge');
const webpackConfigBase = require('./webpack.config.base.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const paths = {
  'static': path.resolve(__dirname, '../src/static')
};

module.exports = function() {
  return webpackMerge(webpackConfigBase(), {
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
                  plugins: function () {
                    return [
                      require('postcss-import'),
                      require('postcss-cssnext'),
                      require('postcss-remove-root'),
                      require('css-mqpacker')({
                        sort: true
                      })
                    ];
                  }
                }
              }
            ]
          })
        }
      ]
    },
    devServer: {
      contentBase: paths.static,
      port: 8080,
      watchOptions: {
        poll: 1000
      }
    },
    plugins: [
      new ExtractTextPlugin('[name].bundle.css')
    ]
  })
};
