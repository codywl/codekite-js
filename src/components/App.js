// This component wraps all succeeding components.
// Author: Cody Welsh
// License: GPL 3.0

import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './navigation/Navigation.js';
import PageHome from './home/Home';
import PageAbout from './about/About';
import Users from './users/Users';
import styles from '../styles/styles.css';

class App extends React.Component {
  render() {
    return (
      <div className={styles.PanesContainer}>
        <Nav/>
        <Route exact path="/" component={PageHome}/>
        <Route path="/about" component={PageAbout}/>
        <Route path="/users" component={Users}/>
      </div>
    )
  }
}

export default App;
