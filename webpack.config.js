const webpack = require('webpack');
const path = require('path');

const config = {
  entry: [
    'react-hot-loader/patch',
    // 在entry 前面，如果有babel-polyfill，在babel-polyfill后面
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // import 自动解析拓展
    alias: {
      'react-dom': '@hot-loader/react-dom', // import 时候别名
    },
  },
  devServer: {
    contentBase: './dist',
    hot: true, // react-hot-loader
  },
};

module.exports = config;
