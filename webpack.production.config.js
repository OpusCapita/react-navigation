'use strict';
const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const config = require('./webpack.development.config.js');
config.entry = path.resolve(path.join(__dirname, 'src', 'client', 'index.js'));
config.externals = [
  nodeExternals({
    modulesFromFile: true
  })
];
delete config.devtool;
delete config.output.publicPath;
delete config.watch;
config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': '"production"'
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      screw_ie8: true
    },
    comments: false
  }),
  // new BundleAnalyzerPlugin()
]);

module.exports = config;
