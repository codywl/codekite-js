const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const isDev = process.env.NODE_ENV !== 'production';

const extractCSS = new miniCssExtractPlugin({
  filename: isDev ? '[name].css' : '[name].[hash].css'
});

const config = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: isDev ? "style-loader" : miniCssExtractPlugin.loader
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
        loader: "babel-loader"
      }],
  },
  plugins: [
    extractCSS
  ]
}

module.exports = config;
