import { RECEIVE_CURRENT_TRACK, PLAY_PAUSE_TRACK, END_CURRENT_TRACK } from '../actions/trackplayer_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = {
  currentTrack: null,
  playing: false,
  trackId: -1,
};

const trackplayerReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  let newState;
  let change;
  switch (action.type) {
    case RECEIVE_CURRENT_TRACK:
      change = {currentTrack: action.track, playing: true, trackId: action.track.id};
      return merge({}, oldState, change);
    case PLAY_PAUSE_TRACK:
      newState = merge({}, oldState, {playing: action.boolean });
      return newState;
    case END_CURRENT_TRACK:
      return defaultState;
    case LOGOUT_CURRENT_USER:
      return defaultState;
    default:
      return oldState;
  }
}

export default trackplayerReducer;

// newState = merge({}, {
//   currentTrack: action.track,
//   playing: true });
