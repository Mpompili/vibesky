export const RECEIVE_CURRENT_TRACK = 'RECEIVE_CURRENT_TRACK';
export const PLAY_PAUSE_TRACK = 'PLAY_PAUSE_TRACK';
export const TRACK_PROGRESS = 'TRACK_PROGRESS';
export const END_CURRENT_TRACK = 'END_CURRENT_TRACK';
export const SEEK_TRACK = 'SEEK_TRACK'; 
export const SET_TRACK_PLAYER = 'SET_TRACK_PLAYER'; 
export const SEEK_WAVE_FORM = 'SEEK_WAVE_FORM'; 
export const SEEK_PLAYER = 'SEEK_PLAYER'; 
export const SET_PROGRESS = 'SET_PROGRESS'; 

export const receiveCurrentTrack = track => ({
  type: RECEIVE_CURRENT_TRACK,
  track
});

export const playPauseTrack = (boolean, trackId, progress) => ({
  type: PLAY_PAUSE_TRACK,
  boolean,
  trackId, 
  progress
});

export const setSeekTrack = seconds => ({
  type: SEEK_TRACK,
  seconds
});

export const trackProgress = (currentTime, duration) => ({
  type: TRACK_PROGRESS,
  currentTime,
  duration
});

export const setTrackPlayer = trackplayer => ({
  type: SET_TRACK_PLAYER,
  trackplayer 
});

export const seekWaveForm = (progress, trackId) => ({
  type: SEEK_WAVE_FORM,
  progress,
  trackId
});

export const seekPlayer = progress => ({
  type: SEEK_PLAYER,
  progress 
});

export const setCurrentTrack = track => dispatch => (
  dispatch(receiveCurrentTrack(track))
);

export const setPlayPause = (boolean, trackId, progress) => dispatch => (
  dispatch(playPauseTrack(boolean, trackId, progress))
);

export const setTrackProgress = (currentTime, duration) => dispatch => (
  dispatch(trackProgress(currentTime, duration))
);

export const endCurrentTrack = (trackId) => dispatch => (
  dispatch({ 
    type: END_CURRENT_TRACK,
    trackId })
);

export const seekTrack = seconds => dispatch => (
  dispatch(setSeekTrack(seconds))
);

export const setProg = (trackId, progress) => dispatch => (
  dispatch({
    type: SET_PROGRESS,
    trackId,
    progress
  })
);