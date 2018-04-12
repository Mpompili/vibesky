import * as APIUtil from '../util/like_api_util';
import { receiveTrack } from './track_actions';

export const RECEIVE_TRACK = 'RECEIVE_TRACK';



export const createLike = (trackId) => dispatch => (
    APIUtil.createLike(trackId).then(payload => (
        dispatch(receiveTrack(payload))
    ))
);

export const deleteLike = likeId => dispatch => (
    APIUtil.deleteLike(likeId).then(payload => (
        dispatch(receiveTrack(payload))
    ))
);