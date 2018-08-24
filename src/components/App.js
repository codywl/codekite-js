// This component wraps all succeeding components.
// Author: Cody Welsh
// License: GPL 3.0

// `npm` modules
import React from "react";
import { Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";

// Components
import NavigationContainer from "./navigation/NavigationContainer.js";
import PaneHome from "./home/Home";
import PaneAbout from "./about/About";
import Users from "./users/Users";
import PaneDefault from "./default/Default";

// Styles
import styles from "../styles/styles.css";

class App extends React.Component {
  render() {
    return (
      <div className={styles["panes"]}>
        <NavigationContainer />
        <Switch>
          <Route path="/home" component={PaneHome} />
          <Route path="/about" component={PaneAbout} />
          <Route path="/users" component={Users} />
          <Route component={PaneDefault} />
        </Switch>
      </div>
    );
  }
}

export default hot(module)(App);
