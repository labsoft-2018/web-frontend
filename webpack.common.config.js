const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

const config = {
  plugins: [
    new webpack.NamedChunksPlugin(),
    new webpack.NamedModulesPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime',
    }),
  ],
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: "awesome-typescript-loader",
      exclude: /node_modules/,
    }, {
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      enforce: "pre",
      test: /\.js$/,
      loader: "source-map-loader",
      exclude: /node_modules/,
    }],
  },
};

module.exports = config;