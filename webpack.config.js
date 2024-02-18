const path = require('path');

module.exports = {
  entry: './src/PogodaApp.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};