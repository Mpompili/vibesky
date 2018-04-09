import * as APIUtil from '../util/track_api_util';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const REMOVE_TRACK = 'REMOVE_TRACK';
export const RECEIVE_TRACK_ERRORS = 'RECEIVE_TRACK_ERRORS';


export const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
});

export const removeTrack = trackId => ({
  type: REMOVE_TRACK,
  trackId
});

export const receiveTrackErrors = errors => ({
  type: RECEIVE_TRACK_ERRORS,
  errors
});


export const fetchTracks = () => dispatch => (
  APIUtil.fetchTracks().then(tracks => (
    dispatch(receiveTracks(tracks))
  ), err => (
    dispatch(receiveTrackErrors(err.responseJSON))
  ))
);

export const fetchTrack = () => dispatch => (
  APIUtil.fetchTrack().then(track => (
    dispatch(receiveTrack(track))
  ), err => (
    dispatch(receiveTrackErrors(err.responseJSON))
  ))
);

export const createTrack = formData => dispatch => (
  APIUtil.createTrack(formData).then(track => (
    dispatch(receiveTrack(track))
  ), err => (
    dispatch(receiveTrackErrors(err.responseJSON))
  ))
);


export const updateTrack = track => dispatch => (
  APIUtil.updateTrack(track).then(track => (
    dispatch(receiveTrack(track))
  ), err => (
    dispatch(receiveTrackErrors(err.responseJSON))
  ))
);

export const deleteTrack = trackId => dispatch => (
  APIUtil.deleteTrack(trackId).then(track => (
    dispatch(removeTrack(trackId))
  ), err => (
    dispatch(receiveTrackErrors(err.responseJSON))
  ))
);
