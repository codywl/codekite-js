// Development Webpack Configuration
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

// Injects script tags pointing to bundle
const HtmlWebpack = new HtmlWebpackPlugin({
  title: "Codekite Demo (Dev)",
  template: path.resolve(__dirname, "../src/html/index.tmpl.html")
});

// Cleans up generated bundles
const CleanWebpack = new CleanWebpackPlugin(["../dist"], {
  allowExternal: true
});

const config = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].bundle.js",
    publicPath: "/"
  },
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    host: "0.0.0.0",
    port: 9000,
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    CleanWebpack,
    HtmlWebpack,
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {}
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader"
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 25000
            }
          }
        ]
      },
      {
        test: /\b(?!test)(\w+)(?!test)(.js)\b/,
        include: [path.resolve(__dirname, "../src")],
        loader: "babel-loader"
      }
    ]
  }
};

module.exports = config;
