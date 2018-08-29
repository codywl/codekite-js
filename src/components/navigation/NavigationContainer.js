import React from "react";
import Nav from "./Navigation";

// Feel free to extract this array into a seperate component.  The first
// { route.path } in this array is used in the render method to specify
// the logo's link.
const routes = [
  {
    path: "/home",
    title: "Home"
  },
  {
    path: "/about",
    title: "About"
  },
  {
    path: "/users",
    title: "Users"
  }
];

const NavigationContainer = () => {
  return <Nav routes={routes} />;
};

export default NavigationContainer;
