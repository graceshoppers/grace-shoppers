import {GET_USERS, CREATE_USER, UPDATE_USER, DELETE_USER} from '../actions/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case GET_USERS:
      return [...action.users].sort((user1, user2)=> user1.id-user2.id);

    case CREATE_USER:
      return [...state, action.newUser];

    case UPDATE_USER:
      return [
        ...state.filter(user => user.id !== action.user.id),
        action.user,
      ].sort((user1, user2)=> user1.id-user2.id);

    case DELETE_USER:
      return state.filter(user => user.id !== action.userId);

    default:
      return state;
  }
};
