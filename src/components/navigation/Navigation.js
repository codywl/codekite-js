import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/styles.css';

const routes = [
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
    <div className={styles.Links}>
      {routes.map((route, idx) => (
        <Link
          key={idx}
          to={route.path}
          className={styles.Links__link}>
          {route.title}
        </Link>
      ))}
    </div>
  );
};

export default Nav;
export { routes as navRoutes };
