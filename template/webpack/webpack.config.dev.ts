import { Configuration } from 'webpack';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { merge } from 'webpack-merge';
import webpackConfigBase from './webpack.config.base';

const devServer: DevServerConfiguration = {
  open: true,
  port: 3000,
  watchFiles: ['src/**/*'],
};

const config = merge<Configuration>(webpackConfigBase, {
  mode: 'development',
  output: {
    filename: '[name].js',
  },
  devtool: 'source-map',
  devServer,
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
});

export default config;
