import axios from 'axios';
import {GET_USERS, CREATE_USER, UPDATE_USER, LOGIN_USER} from './action-types';

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
      .then(res => dispatch(createUser(res.data)))
      .catch(e => console.log(`Error creating a user:\n${e}`));
  };
};

const createUser = newUser => ({
  type: CREATE_USER,
  newUser,
});

// ===============================
// Edit a user in database
export const editUser = updatedUserInfo => {
  const id = user.id;
  return dispatch => {
    return axios
      .put(`/api/users/${id}`, updatedUserInfo)
      .then(res => dispatch(updateUser(res.data)))
      .catch(e => console.error(`Error updating a user:\n${e}`));
  };
};

const updateUser = updatedUser => ({
  type: UPDATE_USER,
  updatedUser,
});

// Sends login credentials to auth route
// Auth route returns status
export const authenticateUser = loginCredentials => {
  return dispatch => {
    return axios
      .post('/auth/login', loginCredentials)
      .then(res => dispatch(loginUser(res.data)))
      .catch(e => console.error(`Error:\n${e}`));
  };
};

const loginUser = status => ({
  type: LOGIN_USER,
  status,
});
