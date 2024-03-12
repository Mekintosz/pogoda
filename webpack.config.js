const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports ={
  entry: './src/PogodaApp.js',
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // devtool: 'inline-source-map', //good for development not for deployment
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|oft)$/i,
          type: 'asset/resource',
        },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: "head",
      scriptloading: 'defer',
    }),
    plugins: [
      new FaviconsWebpackPlugin({
        logo: './src/assets/favicon.svg',
      }) // svg works too!
    ]
  ]
};