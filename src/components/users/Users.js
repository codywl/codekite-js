// List of users retrieved from fake API
// Author: Cody Welsh
// License: GPL 3.0

import React from "react";
import getUsers from "../../api/userApi";
import UsersList from "./UsersList";
import styles from "../../styles/styles.css";

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  getUserList() {
    getUsers().then(res => {
      this.setState({ users: res });
    });
  }

  componentDidMount() {
    this.getUserList();
  }

  render() {
    return (
      <UsersList
        className={styles["panes__content"]}
        users={this.state.users}
      />
    );
  }
}

export default Users;
