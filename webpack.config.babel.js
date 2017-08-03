const { resolve } = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', ['es2015', { modules: false }], 'stage-0'],
          },
        },
      },
    ],
  },
  context: resolve('example'),
  entry: './example.js',
  output: {
    path: resolve('dist'),
    filename: 'demo.js',
    publicPath: '/',
    pathinfo: true,
  },
};