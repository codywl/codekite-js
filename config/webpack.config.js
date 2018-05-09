// Development Webpack Configuration
const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const extractCSS = new miniCssExtractPlugin({
  filename: '[name].css'
});

const config = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
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
    extractCSS
  ]
}

module.exports = config;
