const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: [
        "style-loader",
        {
          loader: 'css-loader',
          options: {
            modules: true
          }
        },
         "sass-loader"]
      },
      { // SVG Support
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),
  ],
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, "public/"),
    hot: true,
  },
};