import axios from 'axios';

import {GET_USERS, CREATE_USER, UPDATE_USER} from './action-types';

// ===============================
// Get all users from database
export const fetchUsers = () => {
  return dispatch => {
    return axios
      .get('/api/users')
      .then(res => dispatch(getUsers(res.data)))
      .catch(e => console.log(`Error fetching users:\n${e}`));
  };
};

const getUsers = users => ({
  type: GET_USERS,
  users,
});

// ===============================
// Create a new user in database
export const addUser = newUser => {
  return dispatch => {
    return axios
      .post('/api/users', newUser)
      .then(res => dispatch(createUser(res.data)));
  };
};

const createUser = newUser => ({
  type: CREATE_USER,
  newUser,
});

// ===============================
// Edit a user in database
export const editUser = user => {
  const id = user.id;
  return dispatch => {
    return axios
      .put(`/api/users/${id}`, user)
      .then(res => dispatch(updateUser(res.data)))
      .catch(e => console.error(`Error updating a user:\n${e}`));
  };
};

const updateUser = user => ({
  type: UPDATE_USER,
  user,
});
