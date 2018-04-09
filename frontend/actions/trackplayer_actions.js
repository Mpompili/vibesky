export const RECEIVE_CURRENT_TRACK = 'RECEIVE_CURRENT_TRACK';
export const PLAY_PAUSE_TRACK = 'PLAY_PAUSE_TRACK';
export const TRACK_PROGRESS = 'TRACK_PROGRESS';
export const END_CURRENT_TRACK = 'END_CURRENT_TRACK';

export const receiveCurrentTrack = track => ({
  type: RECEIVE_CURRENT_TRACK,
  track
});

export const playPauseTrack = boolean => ({
  type: PLAY_PAUSE_TRACK,
  boolean
});

export const trackProgress = (currentTime, duration) => ({
  type: TRACK_PROGRESS,
  currentTime,
  duration
});

export const setCurrentTrack = track => dispatch => (
  dispatch(receiveCurrentTrack(track))
);

export const setPlayPause = boolean => dispatch => (
  dispatch(playPauseTrack(boolean))
);

export const setTrackProgress = (currentTime, duration) => dispatch => (
  dispatch(trackProgress(currentTime, duration))
);

export const endCurrentTrack = () => dispatch => (
  dispatch({ type: END_CURRENT_TRACK })
);
