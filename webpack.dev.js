const webpack = require('webpack');
const path = require('path');
const Merge = require('webpack-merge');
const commonConfig = require('./webpack.common.config')
// const DashboardPlugin = require('webpack-dashboard/plugin');
// const Dashboard = require('webpack-dashboard');

// const dashboard = new Dashboard()

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = Merge(commonConfig, {
  entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      `${APP_DIR}/index.tsx`,
    ],
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
    publicPath: '/',
  },
  devServer: {
    open: true,
    hot: true,
    quiet: true,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    port: 3333,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    // new DashboardPlugin({
    //   port: 8080,
    //   handler: dashboard.setData
    // })
  ],
  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',  
})