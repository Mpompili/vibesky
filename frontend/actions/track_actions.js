import * as APIUtil from '../util/track_api_util';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const REMOVE_TRACK = 'REMOVE_TRACK';
export const RECEIVE_TRACK_ERRORS = 'RECEIVE_TRACK_ERRORS';
export const REQUEST_TRACK_FETCH = 'REQUEST_TRACK_FETCH'; 
export const SET_PEAKS = 'SET_PEAKS'; 

export const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
});

export const requestTrackFetch = () => ({
  type: REQUEST_TRACK_FETCH
});

export const receiveTrack = payload => ({
  type: RECEIVE_TRACK,
  payload
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

export const fetchTrack = (id) => dispatch => {
  dispatch(requestTrackFetch()); 
 return APIUtil.fetchTrack(id).then(payload => (
    dispatch(receiveTrack(payload))
  ), err => (
    dispatch(receiveTrackErrors(err.responseJSON))
  ));
};

export const createTrack = formData => dispatch => (
  APIUtil.createTrack(formData).then(payload => (
    dispatch(receiveTrack(payload))
  ), err => (
    dispatch(receiveTrackErrors(err.responseJSON))
  ))
);


export const updateTrack = (track, id) => dispatch => (
  APIUtil.updateTrack(track, id).then(payload => (
    dispatch(receiveTrack(payload))
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

