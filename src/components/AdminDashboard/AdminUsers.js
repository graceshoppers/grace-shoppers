import React from "react";
import { connect } from "react-redux";
import {
  addUser,
  editUser,
  deleteUser
} from "../../redux-store/actions/user-actions";

const AdminUsers = (props) => {
  const {users} = props
  return <div>{users.map(user =>{
      return(
          <div>{user.firstName}</div>
      )
  })}</div>;
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps, {addUser, editUser, deleteUser})(AdminUsers)