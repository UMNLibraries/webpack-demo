// And example of creatig your own JS library
// To see this in action
// run npm start
// open your browser to http://localhost:8080
// inspect page and then open console
// type BasicAdder.add(3,4)
const { resolve } = require('path');
module.exports = {
  context: resolve('src'),
  entry: './add.js',
  output: {
    path: resolve('dist'),
    filename: 'basic-add.js',
    library: 'BasicAdder',
    libraryTarget: 'umd'
  },
};

