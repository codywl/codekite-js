// This component renders the navigation links above the content panes.
import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

// After a lot of research and "consultation" (see: asking other
// developers), I've arrived at `styled-components` as a replacement for
// the previous workflow of `css-modules`.
import styled from "react-emotion";
import Logo from "../../styles/images/codekite-logo.svg";

// Contains the other elements.
const StyledNav = styled("ul")`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding-bottom: 1em;
  border-bottom: 2px solid #4ecdc4;
`;

// This is just the logo, which also functions as an additional home
// pane link.
const NavIcon = styled(NavLink)`
  width: 100px;
  height: 28px;
  background-image: url(${Logo});
  background-size: contain;
  background-repeat: no-repeat;
  outline: none;
  @media screen and (max-width: 350px) {
    .nav__icon {
      margin-bottom: 1em;
    }
  }
`;

// Styles wrapping `NavLink`s in the `ul`
const StyledNavLink = styled(NavLink)`
  color: #4ecdc4;
  font-size: 14px;
  text-decoration: none;
  margin-right: 24px;
  outline: none;
  &.active {
    font-weight: bold;
  }
`;

const Nav = props => {
  return (
    <StyledNav>
      <NavIcon to={props.routes[0].path} />
      <div>
        {props.routes.map((route, idx) => (
          <StyledNavLink key={idx} to={route.path}>
            {route.title}
          </StyledNavLink>
        ))}
      </div>
    </StyledNav>
  );
};

Nav.propTypes = {
  routes: PropTypes.array
};

export default Nav;
