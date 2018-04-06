import * as APIUtil from '../util/track_api_util';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_TRACK_ERRORS = 'RECEIVE_TRACK_ERRORS';

export const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
});

export const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});

export const receiveTrackErors = errors => ({
  type: RECEIVE_TRACK_ERRORS,
  errors
});


export const fetchTracks = () => dispatch => (
  APIUtil.fetchTracks().then(tracks => (
    dispatch(receiveTracks(tracks))
  ), err => (
    dispatch(receiveTrackErors(err.responseJSON))
  ))
);

export const fetchTrack = () => dispatch => (
  APIUtil.fetchTrack().then(track => (
    dispatch(receiveTrack(track))
  ), err => (
    dispatch(receiveTrackErors(err.responseJSON))
  ))
);
