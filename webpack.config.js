const path = require('path');

module.exports ={
  entry: './src/PogodaApp.js',
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg)$/i,
        type: 'asset/resource',
      },
    ]
  }
}