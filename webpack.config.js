
const path = require('path');

module.exports = {
  entry: './frontend/entry.jsx',
  context: __dirname,
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
          }]
        },
  devtool: 'source-map'
};
