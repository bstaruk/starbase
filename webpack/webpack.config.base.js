const path = require('path');
const pathsHelper = require('./lib/paths-helper');

module.exports = function () {
  return {
    context: pathsHelper('src'),
    entry: {
      app: ['./app.js']
    },
    output: {
      filename: '[name].bundle.js',
      path: pathsHelper('assets')
    },
    resolveLoader: {
      alias: {
        'css-prefix-variables': path.resolve(__dirname, './lib/css-prefix-variables.js')
      }
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['eslint-loader']
        },
        {
          enforce: 'pre',
          test: /\.css$/,
          include: [
            pathsHelper('components')
          ],
          use: [
            {
              loader: 'css-prefix-variables',
              options: {
                path: pathsHelper('variables')
              }
            }
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['es2015', {'loose': true, 'modules': false}],
                ]
              }
            }
          ]
        },
        {
          test: /\.(png|jpg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: 'images/[name].[ext]'
              }
            }
          ]
        },
        {
          test: /\.(woff|woff2|otf|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: 'fonts/[name].[ext]'
              }
            }
          ]
        },
        {
          test: /\.(mp4|ogg|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [
            {
              loader: 'file-loader'
            }
          ]
        }
      ]
    }
  };
};
