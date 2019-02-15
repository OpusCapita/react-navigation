'use strict';
const webpack = require('webpack');
const path = require('path');

let config = require('./webpack.development.config.js');
delete config.devtool;
delete config.output.publicPath;
delete config.watch;
config.output.path = path.resolve(__dirname, './.gh-pages-tmp');
config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"'
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      screw_ie8: true
    },
    comments: false
  })
]);

module.exports = config;
