const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    app: ['./app.js']
  },
  output: {
    path: path.resolve(__dirname, '../dist')
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
        test: /\.css$/,
        include: [
          path.resolve(__dirname, '../src/app'),
          path.resolve(__dirname, '../src/components')
        ],
        use: [
          {
            loader: 'css-prefix-variables',
            options: {
              path: path.resolve(__dirname, '../src/variables/variables.css')
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true
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
              name: 'images/[name].[md5:hash:hex:8].[ext]'
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
              name: 'fonts/[name].[md5:hash:hex:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(mp4|ogg|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[md5:hash:hex:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/templates/index.html'),
      filename: 'index.html',
      favicon: path.resolve(__dirname, '../src/templates/images/favicon.png')
    })
  ]
};
