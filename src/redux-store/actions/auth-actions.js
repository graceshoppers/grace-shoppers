import axios from 'axios';
import {GET_USER_DETAILS, LOGIN_USER} from './action-types';

// ===============================
// Gets user details from Express session
// Returns {} if there is no current session
export const getUserDetails = () => {
  return dispatch => {
    return axios.get('/auth').then(res =>
      dispatch({
        type: GET_USER_DETAILS,
        userDetails: res.data,
      })
    );
  };
};

// ===============================
// Attempts to log in user
export const loginUser = loginCredentials => {
  return dispatch => {
    return axios.post('/auth/login', loginCredentials).then(res =>
      dispatch({
        type: LOGIN_USER,
        userDetails: res.data,
      })
    );
  };
};
