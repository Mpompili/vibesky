import { RECEIVE_CURRENT_TRACK, PLAY_PAUSE_TRACK, END_CURRENT_TRACK, SEEK_TRACK } from '../actions/trackplayer_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = {
  currentTrack: null,
  playing: false,
  trackId: -1,
  seek: 0
};

const trackplayerReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  let newState;
  let change;
  switch (action.type) {
    case RECEIVE_CURRENT_TRACK:
      change = {currentTrack: action.track, playing: true, trackId: action.track.id, seek: 0};
      return merge({}, oldState, change);
    case PLAY_PAUSE_TRACK:
      newState = merge({}, oldState, {playing: action.boolean });
      return newState;
    case END_CURRENT_TRACK:
      return defaultState;
    case LOGOUT_CURRENT_USER:
      return defaultState;
    case SEEK_TRACK:
      return merge({}, oldState, {seek: action.seconds});
    default:
      return oldState;
  }
};

export default trackplayerReducer;

// newState = merge({}, {
//   currentTrack: action.track,
//   playing: true });
