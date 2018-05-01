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
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
            }
          }, {
            loader: "sass-loader"
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
    extractSass
  ]
};

module.exports = config;
