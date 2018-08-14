// Main entry point for Webpack.
// Author: Cody Welsh
// License: GPL 3.0

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';

ReactDOM.render((
  <Router>
    <App/>
  </Router>
  ), document.getElementById('root')
);
