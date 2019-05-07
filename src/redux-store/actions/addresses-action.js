import axios from 'axios';
import {
  GET_ADDRESSES,
  CREATE_ADDRESSES,
  UPDATE_ADDRESSES,
  DELETE_ADDRESSES,
} from './action-types';

// ===============================
// Get all addresses from database
export const fetchAddresses = () => {
  return dispatch => {
    return axios
      .get('/api/addresses')
      .then(res => dispatch(getAddresses(res.data)))
      .catch(e => console.log(`Error fetching addresses:\n${e}`));
  };
};

const getAddresses = addresses => ({
  type: GET_ADDRESSES,
  addresses,
});
