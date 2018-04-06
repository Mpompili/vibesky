import { RECEIVE_TRACKS, RECEIVE_TRACK, REMOVE_TRACK  } from '../actions/track_actions';
import merge from 'lodash/merge';

const trackReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_TRACKS:
      return action.tracks;
    case RECEIVE_TRACK:
      newState = {[action.track.id]: action.track}
      return merge({}, oldState, newState);
    case REMOVE_TRACK:
      newState = merge({}, oldState);
      delete newState[action.trackId];
      return newState;
    default:
      return oldState;
  }
}

export default trackReducer; 
