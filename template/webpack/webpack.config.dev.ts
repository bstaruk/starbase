import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import 'webpack-dev-server';

// import base config
import webpackConfigBase from './webpack.config.base';

const config = merge<Configuration>(webpackConfigBase, {
  mode: 'development',
  output: {
    filename: '[name].js',
  },
  devtool: 'source-map',
  devServer: {
    open: true,
    port: 3000,
    watchFiles: ['src/**/*'],
  },
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
