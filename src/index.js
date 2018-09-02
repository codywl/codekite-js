// Main entry point for Webpack.
// Author: Cody Welsh
// License: GPL 3.0

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";

// This uses a proposed/experimental dynamic import syntax:
// https://github.com/tc39/proposal-dynamic-import
import("react-dom").then(ReactDOM => {
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById("root")
  );
});
