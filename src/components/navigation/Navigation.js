import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../styles/styles.css';

const routes = [
  {
    path: '/home',
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
    <div className={styles.nav}>
      {routes.map((route, idx) => (
        <NavLink
          key={idx}
          to={route.path}
          className={styles.nav__link}
          activeClassName={styles['nav__link--active']}>
          {route.title}
        </NavLink>
      ))}
    </div>
  );
};

export default Nav;
export { routes as navRoutes };
