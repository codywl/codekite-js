// Presentation UsersList Component
import React from "react";
import PropTypes from "prop-types";
import styles from "../../styles/styles.css";

const UsersList = ({ users }) => {
  let mappedUsers = users.length
    ? users.map(user => (
        <ul className={styles.user} key={user.id}>
          <li>
            {user.firstName} {user.lastName}
          </li>
          <li>{user.email}</li>
        </ul>
      ))
    : null;

  return (
    <div>
      <p className={styles["panes__paragraph"]}>
        This is a list of generated users, which live in `db.json`; They are
        served by `json-server` asynchronously.
      </p>
      {mappedUsers}
    </div>
  );
};

UsersList.propTypes = {
  users: PropTypes.array
};

export default UsersList;
