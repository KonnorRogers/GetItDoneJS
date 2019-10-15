// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  devServer: {
    open: true,
    contentBase: path.resolve(__dirname, 'dist'),
    watchContentBase: true,
    compress: true,
  },
};
