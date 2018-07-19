// Main entry point for Webpack.
// Author: Cody Welsh
// License: GPL 3.0

import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/styles.css';
import Users from './users.js';

// The following is used by ESLint to ignore the definition and alleged
// lack of use for the Main component in the primary render function.
// If you don't use ESLint, feel free to remove it.
/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "Main" }]*/

class Main extends React.Component {
  render() {
    return (
      <div className={styles.paragraph}>
        Hi! You can change this in `src/index.js`.
        This is a list of users populated by the
        fake API:

        <Users />
      </div>
    );
  }
}

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);
