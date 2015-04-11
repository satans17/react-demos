var path = require('path');
module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        loader: 'jsx-loader?harmony'
      }
    ]
  },
  plugins: [],
  entry: {
    'example/start/index': ['./example/start/index.js']
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath:'/build/',
    filename: "[name].js",
    chunkFilename: "[name].js"
  }
};