// This component wraps all succeeding components.
// Author: Cody Welsh
// License: GPL 3.0

import React from 'react';
import { Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Nav from './navigation/Navigation.js';
import PaneHome from './home/Home';
import PaneAbout from './about/About';
import Users from './users/Users';
import styles from '../styles/styles.css';

class App extends React.Component {
  render() {
    return (
      <div className={styles.PanesContainer}>
        <Nav/>
        <Route exact path="/" component={PaneHome}/>
        <Route path="/about" component={PaneAbout}/>
        <Route path="/users" component={Users}/>
      </div>
    )
  }
}

export default hot(module)(App);
