import axios from 'axios';
import {LOGIN_USER} from './action-types';

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
