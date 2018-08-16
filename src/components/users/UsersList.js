// Presentation UsersList Component
import React from "react";
import PropTypes from "prop-types";
import styles from "../../styles/styles.css";

const UsersList = ({ users }) => {
  return users.length
    ? users.map(user => (
        <ul className={styles.user} key={user.id}>
          <li>
            {user.firstName} {user.lastName}
          </li>
          <li>{user.email}</li>
        </ul>
      ))
    : null;
};

UsersList.propTypes = {
  users: PropTypes.array
};

export default UsersList;
