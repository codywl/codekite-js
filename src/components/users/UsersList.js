// Presentation UsersList Component
import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const User = styled("ul")`
  list-style: none;
  padding: 1em;
  background: #4ecdc4;
  color: #333;
`;

const IntroParagraph = styled("p")`
  margin-bottom: 24px;
  &:empty::after {
    content: "Loading...";
    padding: 2em;
  }
`;

// TODO: Make a UsersListContainer that supplies mappedUsers as a prop
// to this presentation component.
const UsersList = ({ users }) => {
  let mappedUsers = users.length
    ? users.map(user => (
        <User key={user.id}>
          <li>
            {user.firstName} {user.lastName}
          </li>
          <li>{user.email}</li>
        </User>
      ))
    : null;

  return (
    <div>
      <IntroParagraph>
        This is a list of generated users, which live in `db.json`; They are
        served by `json-server` asynchronously.
      </IntroParagraph>
      {mappedUsers}
    </div>
  );
};

UsersList.propTypes = {
  users: PropTypes.array
};

export default UsersList;
