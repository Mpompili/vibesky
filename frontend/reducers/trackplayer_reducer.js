import { RECEIVE_CURRENT_TRACK, PLAY_PAUSE_TRACK, REPLACE_CURRENT_TRACK} from '../actions/track_actions';
import merge from 'lodash/merge';

const trackplayerReducer = (oldState = { currentTrack: null, playing: false}, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_TRACK:
      return {currentTrack: action.track, playing: true };
    case PLAY_PAUSE_TRACK:
      newState = merge({}, oldState, {playing: action.boolean });
      return newState;
    default:
      return oldState;
  }
}

export default trackplayerReducer;

// newState = merge({}, {
//   currentTrack: action.track,
//   playing: true });
