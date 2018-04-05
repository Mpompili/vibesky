import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const errorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return { session: action.errors }
    case RECEIVE_CURRENT_USER:
      return {};
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
}

export default errorsReducer;
