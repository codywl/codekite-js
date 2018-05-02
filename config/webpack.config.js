const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new extractTextPlugin({
  filename: "ext.css"
});

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: extractSass.extract({
          use: [
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          }, {
            loader: "postcss-loader"
          }]
        })
      },
      {
        test: /\.js$/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
  ]
};

module.exports = config;
