// Author: Cody Welsh
// License: GPL 3.0

import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import NavigationContainer from "./NavigationContainer";

configure({ adapter: new Adapter() });
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

test("creates links from a routes array", () => {
  const navcomp = mount(<NavComp />);
  expect(navcomp).toHaveLength(1);
  expect(navcomp.find(`a`)).toHaveLength(4);
});
