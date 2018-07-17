// Production Webpack Configuration
const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractCSS = new miniCssExtractPlugin({
  filename: '[name].css'
});

const HtmlWebpack = new HtmlWebpackPlugin({
  title: 'Codekite Demo',
  template: path.resolve(__dirname, '../dist/index.tmpl.html')
});

const config = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].bundle.js',
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: miniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1
            }
          }, {
            loader: "postcss-loader"
          }],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }],
  },
  plugins: [
    extractCSS,
    HtmlWebpack
  ]
}

module.exports = config;
