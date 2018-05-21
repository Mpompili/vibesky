import { RECEIVE_USER, RECEIVE_USER_ERRORS } from '../actions/user_actions';
// import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const userReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_USER:
      newState = {[action.payload.id]: action.payload};
      return Object.assign({}, oldState, newState);  
    default:
      return oldState;
  }
};

export default userReducer;
