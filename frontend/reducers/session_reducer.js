import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';

import merge from 'lodash/merge';

const sessionReducer = (state = { currentUser: null }, action) => {
  Object.freeze(state);
  let newState = merge({}, state); 
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.currentUser };
    case LOGOUT_CURRENT_USER:
      return { currentUser: action.currentUser };
    case RECEIVE_LIKE:
      newState.currentUser.likes.push(action.trackId);
      return newState; 
    case REMOVE_LIKE:
      const sliceIdx = newState.currentUser.likes.indexOf(action.trackId);
      newState.currentUser.likes.splice(sliceIdx,1); 
      return newState; 
    default:
      return state;
  }
};

export default sessionReducer;
