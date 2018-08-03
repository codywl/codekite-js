import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  {
    path: '/',
    exact: true,
    title: 'Home'
  },
  {
    path: '/about',
    title: 'About'
  },
  {
    path: '/users',
    title: 'Users'
  }
];

const Nav = () => {
  return (
    <div className="Links">
      {links.map((link) => (
        <Link to={link.path}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Nav;
