const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const path = require('path');

module.exports = {
  context: path.resolve(process.cwd(), 'src'),
  entry: {
    app: [path.join(process.cwd(), 'src/app.js')],
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    // publicPath: '/',
  },
  resolve: {
    modules: ['node_modules', path.resolve(process.cwd(), 'src')],
    extensions: ['.js', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]],
          },
        },
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
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name]-[hash:8][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new ESLintPlugin(),
    new StylelintPlugin(),
    new HtmlPlugin({
      template: 'index.html', // Input
      filename: 'index.html', // Output
      favicon: 'assets/favicon.png',
    }),
  ],
};
