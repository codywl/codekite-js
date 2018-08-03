// This component wraps all succeeding components.
// Author: Cody Welsh
// License: GPL 3.0

import React from 'react';
import PageHome from './home/Home';
import Nav from './navigation/Navigation.js';

class App extends React.Component {
  render() {
    return (
      <div className="PanesContainer">
        <Nav/>
        <PageHome/>
      </div>
    )
  }
}

export default App;
