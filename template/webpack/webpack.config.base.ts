import { Configuration } from 'webpack';
import ESLintPlugin from 'eslint-webpack-plugin';
import StylelintPlugin from 'stylelint-webpack-plugin';
import HtmlPlugin from 'html-webpack-plugin';
import path from 'path';

const config: Configuration = {
  context: path.resolve(process.cwd(), 'src'),
  entry: {
    app: [path.join(process.cwd(), 'src/app.ts')],
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    // publicPath: '/',
  },
  resolve: {
    modules: ['node_modules', path.resolve(process.cwd(), 'src')],
    extensions: ['.js', '.ts', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
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
    new ESLintPlugin({
      extensions: ['.js', '.ts'],
    }),
    new StylelintPlugin(),
    new HtmlPlugin({
      template: 'index.html', // Input
      filename: 'index.html', // Output
      favicon: 'assets/favicon.png',
    }),
  ],
};

export default config;
