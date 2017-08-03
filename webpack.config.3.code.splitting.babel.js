const { resolve } = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: resolve('src'),
  entry: {
    "subtract": './subtract.js',
    "multiply": './multiply.js'
  },
  plugins: [
    // Creates an example index.hml page with includes of all of the bundles
    new HTMLWebpackPlugin({
      title: 'Code Splitting'
   }),
   // Extract any commonly used code into its own bundle
   new webpack.optimize.CommonsChunkPlugin({
     name: 'common' // Specify the common bundle's name.
   })
  ],
  output: {
    filename: '[name].bundle.js',
    path: resolve('dist')
  }
};

