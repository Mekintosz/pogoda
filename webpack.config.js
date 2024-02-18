const path = require('path');

module.exports = {
  entry: './src/PogodaApp.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};