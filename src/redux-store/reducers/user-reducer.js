import {GET_USERS, CREATE_USER, UPDATE_USER} from '../actions/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case GET_USERS:
      return [...action.users];

    case CREATE_USER:
      return [...state.users, action.newUser];

    case UPDATE_USER:
      return [
        ...state.users.filter(user => user.id !== action.updatedUser.id),
        action.user,
      ];

    default:
      return state;
  }
};
