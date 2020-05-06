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

// For App wrapper div styles
import styled from "@emotion/styled";

const AppWrapper = styled("div")`
  font-family: "Roboto Slab", sans-serif;
  color: #4ecdc4;
  background-color: #444;
  border-top: 4px solid #565656;
  border-bottom: 4px solid #222;
  border-radius: 2px;
  width: 500px;
  padding: 2em;
`;

class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        <NavigationContainer />
        <Switch>
          <Route path="/home" component={PaneHome} />
          <Route path="/about" component={PaneAbout} />
          <Route path="/users" component={Users} />
          <Route component={PaneDefault} />
        </Switch>
      </AppWrapper>
    );
  }
}

export default hot(module)(App);
