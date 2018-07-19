// Production Webpack Configuration
const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// External CSS
const extractCSS = new miniCssExtractPlugin({
  filename: '[name].[hash].css'
});

// Injects script tags pointing to bundle
const HtmlWebpack = new HtmlWebpackPlugin({
  title: 'Codekite Demo',
  template: path.resolve(__dirname, '../src/html/index.tmpl.html')
});

// Cleans up generated bundles
const CleanWebpack = new CleanWebpackPlugin(['../dist'], {allowExternal: true});

const config = {
  mode: 'production',
  entry: './src/index.js',
  devtool: 'source-map',
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
    HtmlWebpack,
    CleanWebpack
  ]
}

module.exports = config;
