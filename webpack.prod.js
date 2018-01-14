const webpack = require('webpack');
const Merge = require('webpack-merge');
const commonConfig = require('./webpack.common.config');
const CompressionPlugin = require('compression-webpack-plugin');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = Merge(commonConfig, {
  entry: {
    app: `${APP_DIR}/index.tsx`,
    vendor: [
      'react',
      'react-dom',
    ],
  },
  plugins: [
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|html)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    // new BundleAnalyzerPlugin(),
  ],
  output: {
    path: BUILD_DIR,
    filename: '[name].[chunkHash].js',
    publicPath: '/',
  },
});