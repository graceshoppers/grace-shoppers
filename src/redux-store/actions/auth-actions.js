import axios from 'axios';
import {
  GET_USER_DETAILS,
  LOGIN_USER,
  LOGOUT_USER,
  UPDATE_ONE_USERDETAILS,
} from './action-types';

// ===============================
// Gets user details from Express session
// Returns user object if session is found or JS object, {},
// if there is no current session.

// Errors are caught where this function is invoked.
export const getUserDetails = () => {
  return dispatch => {
    return axios.get('/auth').then(res => {
      if (res.data.id) {
        dispatch({
          type: GET_USER_DETAILS,
          userDetails: res.data,
        });
      }
    });
  };
};

export const updateUserDetails = id => {
  return dispatch => {
    return axios
      .get(`api/users/${id}`)
      .then(res =>
        dispatch({type: UPDATE_ONE_USERDETAILS, userDetails: res.data})
      )
      .catch(err => console.error(`Error updating user details:\n${err}`));
  };
};

// ===============================
// Attempts to log in user
// If successful, API will send user object.
// Errors are caught where this function is invoked.
export const loginUser = loginCredentials => {
  return dispatch => {
    return axios.post('/auth/login', loginCredentials).then(res => {
      if (res.data.id) {
        dispatch({
          type: LOGIN_USER,
          userDetails: res.data,
        });
      }
    });
  };
};

// ===============================
// Logs out user using req.session.destroy
export const logoutUser = () => {
  return dispatch => {
    return axios.post('/auth/logout').then(res =>
      dispatch({
        type: LOGOUT_USER,
        userDetails: res.data,
      })
    );
  };
};
