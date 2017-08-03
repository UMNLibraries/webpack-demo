
// And example of creatig your own JS library

const { resolve } = require('path');
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            },
          },
        ],
      },
    ],
  },
  context: resolve('src'),
  entry: './style-example.js',
  devtool: 'source-map',
  output: {
    path: resolve('dist'),
    filename: 'style-example.js',
  },
};

