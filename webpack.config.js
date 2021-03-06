/**
 * Creator: yeliex
 * Project: wechat-kit
 * Description:
 */

const webpack = require('webpack');

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    path: require('path').join(__dirname, '/dist'),
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ["babel"]
      }
    ]
  }
};