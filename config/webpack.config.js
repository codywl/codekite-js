// Development Webpack Configuration
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

// Injects script tags pointing to bundle
const HtmlWebpack = new HtmlWebpackPlugin({
  title: "Codekite Demo (Dev)",
  template: path.resolve(__dirname, "../src/html/index.tmpl.html"),
});

const config = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].bundle.js",
    publicPath: "/",
  },
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    host: "0.0.0.0",
    port: 9000,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [HtmlWebpack, new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {},
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 25000,
            },
          },
        ],
      },
      {
        test: /\b(?!test)(\w+)(?!test)(.js)\b/,
        include: [path.resolve(__dirname, "../src")],
        loader: "babel-loader",
      },
    ],
  },
};

module.exports = config;
