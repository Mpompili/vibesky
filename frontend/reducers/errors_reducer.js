import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS,  } from '../actions/session_actions';
import { RECEIVE_TRACK_ERRORS } from '../actions/track_actions';
import { RECEIVE_USER_ERRORS } from '../actions/user_actions'; 

import merge from 'lodash/merge';

const errorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return { session: action.errors };
    case RECEIVE_TRACK_ERRORS:
      return { tracks: action.errors };
    case RECEIVE_USER_ERRORS:
      return { tracks: action.errors };
    case RECEIVE_CURRENT_USER:
      return {};
    case CLEAR_ERRORS:
      //for the modal
      return {};
    default:
      return state;
  }
}

export default errorsReducer;
