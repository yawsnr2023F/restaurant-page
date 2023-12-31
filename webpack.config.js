const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    content: './src/content.js',
  },
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js']
  },
};