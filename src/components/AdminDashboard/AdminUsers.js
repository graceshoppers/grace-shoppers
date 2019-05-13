import React from "react";
import { connect } from "react-redux";
import {
  editUser,
  deleteUser
} from "../../redux-store/actions/user-actions";

const AdminUsers = props => {
  const { users, deleteUser, editUser } = props;

  const changeType = (user) =>{
    user.isAdmin = !user.isAdmin
    editUser(user)
  }

  const mapUsersTableBody = users => {
    return users.map(user => {
      const { id, firstName, lastName, isAdmin, email } = user;
      return (
        <tr key={id}>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{isAdmin ? "Admin" : "User"}</td>
          <td>{email}</td>
          <td><img onClick={()=>changeType(user)} src='admin_icon.jpg' style={{width:'25px', height:'25px'}}/></td>
          <td>  <button
              style={{width:'35px'}}
                className="btn btn-outline-dark"
                onClick={() => deleteUser(id)}
              >
                -
              </button></td>
        </tr>
      );
    });
  };

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>First</th>
          <th>Last</th>
          <th>Type</th>
          <th>Email</th>
          <th>Change Access</th>
          <th></th>
        </tr>
      </thead>

      <tbody>{mapUsersTableBody(users)}</tbody>
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
  { editUser, deleteUser }
)(AdminUsers);
