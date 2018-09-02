// Production Webpack Configuration
const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const BundleAnalyze = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const bundlePlugin = new BundleAnalyze();

// External CSS
const extractCSS = new miniCssExtractPlugin({
  filename: "[name].[hash].css"
});

// Injects script tags pointing to bundle
const HtmlWebpack = new HtmlWebpackPlugin({
  title: "Codekite Demo",
  template: path.resolve(__dirname, "../src/html/index.tmpl.html")
});

// Cleans up generated bundles
const CleanWebpack = new CleanWebpackPlugin(["../dist"], {
  allowExternal: true
});

const config = {
  mode: "production",
  entry: {
    index: "./src/index.js"
  },
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[hash].bundle.js",
    chunkFilename: "[name].bundle.js",
    publicPath: "./"
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({
        name: "[name].css",
        chunkFileName: "[id].css"
      })
    ]
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
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.svg?/,
        exclude: /node_modules/,
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
        test: /\.js$/,
        exclude: ["/node_modules/", "/src/api"],
        loader: "babel-loader"
      }
    ]
  },
  plugins: [extractCSS, HtmlWebpack, CleanWebpack, bundlePlugin]
};

module.exports = config;
