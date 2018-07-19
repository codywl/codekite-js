// Development Webpack Configuration
const path = require('path');

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
    host: "0.0.0.0",
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
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
  }
}

module.exports = config;
