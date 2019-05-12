import axios from 'axios';

import {
  GET_USERS,
  CREATE_USER,
  UPDATE_USER,
  GET_USER_DETAILS,
  UPDATE_ONE_USERDETAILS,
  LOGIN_USER,
  DELETE_USER,
} from './action-types';

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

export const updateUserDetails = id => {
  return dispatch => {
    return axios
      .get(`api/users/${id}`)
      .then(res => dispatch({type: UPDATE_ONE_USERDETAILS, userDetails: res.data}))
      .catch(err => console.error(`Error updating user details:\n${err}`));
  };
};
// ===============================
// Gets session information from Express app
export const getUserDetailsFromSession = () => {
  return dispatch => {
    return axios
      .get('/auth')
      .then(res =>
        dispatch({
          type: GET_USER_DETAILS_FROM_SESSION,
          userDetails: res.data,
        })
      )
      .catch(e => console.error(`Error:\n${e}`));
  };
};

export const loginUser = loginCredentials => {
  return dispatch => {
    return axios
      .post('/auth/login', loginCredentials)
      .then(res =>
        dispatch({
          type: LOGIN_USER,
          userDetails: res.data,
        })
      )
      .catch(e => console.error(`Error:\n${e}`));
  };
};

export const deleteUser = userId => {
  return dispatch => {
    return axios
      .delete(`/api/users/${userId}`)
      .then(res => dispatch(removeUser(userId)))
      .catch(e => console.error(`Error updating a user:\n${e}`));
  };
};

const removeUser = userId => ({
  type: DELETE_USER,
  userId,
});
