// List of users retrieved from fake API
// Author: Cody Welsh
// License: GPL 3.0

import React from 'react';
import PropTypes from 'prop-types';
import getUsers from './api/userApi';
//import styles from '../styles/styles.css';

// The following is used by ESLint to ignore the definition and alleged
// lack of use for the Main component in the primary render function.
// If you don't use ESLint, feel free to remove it.
/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "Main" }]*/

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  getUserList() {
    getUsers().then((res) => { this.setState({users: res}); });
  }

  componentDidMount() {
    this.getUserList();
  }

  render() {
    let users = this.state.users;
    const usersList = users.map((user) =>
      <ul key={user.id}>
        <li>{user.firstName} {user.lastName}</li>
        <li>{user.email}</li>
      </ul>
    );
    return (
      <div className="Users">
        {usersList}
      </div>
    )

  }
}

Users.propTypes = {
  users: PropTypes.array
};

export default Users;
