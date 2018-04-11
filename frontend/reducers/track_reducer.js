import { RECEIVE_TRACKS, RECEIVE_TRACK, REMOVE_TRACK } from '../actions/track_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const trackReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_TRACKS:
      return action.tracks;
    case RECEIVE_TRACK:
      newState = {[action.payload.track.id]: action.payload.track};
   
      // merge({}, oldState, newState);
      return Object.assign({}, oldState, newState);
    case REMOVE_TRACK:
      newState = merge({}, oldState);
      delete newState[action.trackId];
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};

export default trackReducer;
