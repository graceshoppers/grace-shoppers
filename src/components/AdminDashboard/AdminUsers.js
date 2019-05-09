import React from "react";
import { connect } from "react-redux";
import {
  addUser,
  editUser,
  deleteUser
} from "../../redux-store/actions/user-actions";

const AdminUsers = props => {
  const { users } = props;

  const mapUsers = users => {
    return users.map(user => {
      const { id, firstName, lastName, isAdmin, email } = user;
      return (
        <tr key={id}>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{isAdmin ? "Admin" : "User"}</td>
          <td>{email}</td>
          <td />
        </tr>
      );
    });
  };

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Type</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>{mapUsers(users)}</tbody>
    </table>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  { addUser, editUser, deleteUser }
)(AdminUsers);
