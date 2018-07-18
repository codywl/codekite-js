// Dev API/server
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const app = express();
const config = require('./config/webpack.config.js');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

// Serve a specific file at root
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

// Static files exist in /dist
app.use(express.static(__dirname + '/dist'));

// Serve the files on port 3000.
app.listen(9000, function () {
  console.log("Listening on port 9000");
});

