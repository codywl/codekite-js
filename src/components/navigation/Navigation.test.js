// Author: Cody Welsh
// License: GPL 3.0

import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

import NavigationContainer from "./NavigationContainer";

const NavComp = () => {
  return (
    <Router>
      <NavigationContainer />
    </Router>
  );
};

test("renders without errors", () => {
  const component = renderer.create(<NavComp />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
