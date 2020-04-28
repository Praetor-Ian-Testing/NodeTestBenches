/* eslint-disable node/no-unpublished-require */
const path = require('path');
// const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    index: './index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  // externals: [nodeExternals()],
  plugins: [],
};
