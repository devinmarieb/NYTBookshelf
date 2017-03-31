const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
  rules: [
    {
      test: /\.jsx?$/,
      include: path.join(__dirname, 'app'),
      exclude: /node_modules/,
      loaders: ['babel-loader'],
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
      ],
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader?sourceMap',
        'sass-loader?sourceMap',

      ],
    },
    {
      test: /\.png$/,
      use: [
        'url-loader',
      ],
    },
  ],
},
  devServer: {
    contentBase: './build',
    inline: true
  },
  resolve: {
    extensions: ['*', '.js', '.json', '.jsx', '.css', '.scss']
  },
    node: {
    fs: "empty",
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  }
}
