const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  context: path.resolve(process.cwd(), 'src'),
  entry: {
    app: [path.join(process.cwd(), 'src/app.js')],
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/',
  },
  resolve: {
    modules: ['node_modules', path.resolve(process.cwd(), 'src')],
    extensions: ['.js', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'images/[name].[md5:fullhash:hex:8].[ext]',
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[md5:fullhash:hex:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(mp4|ogg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[md5:fullhash:hex:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[md5:fullhash:hex:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[fullhash:8].css',
      chunkFilename: '[id].[fullhash:8].css',
    }),
    new HtmlWebpackPlugin({
      template: 'templates/index.html',
      filename: 'index.html',
      favicon: 'templates/images/favicon.png',
    }),
  ],
};
