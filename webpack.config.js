const path = require('path');

module.exports = {
  entry: './src/style.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
