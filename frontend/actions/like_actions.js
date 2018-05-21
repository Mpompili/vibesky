import * as APIUtil from '../util/like_api_util';
import { receiveTrack } from './track_actions';

export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_LIKE = 'RECEIVE_LIKE'; 
export const REMOVE_LIKE = 'REMOVE_LIKE'; 


export const receiveLike = ({trackId}) => (
    {type: RECEIVE_LIKE, trackId}
);
export const removeLike = ({trackId}) => (
    {type: REMOVE_LIKE, trackId}
);

export const createLike = (trackId) => dispatch => (
    APIUtil.createLike(trackId).then(payload => {
        return (
        dispatch(receiveLike(payload))
    );}
)
);

export const deleteLike = trackId => dispatch => {
    return (
    APIUtil.deleteLike(trackId).then(payload => {
        return (
        dispatch(removeLike(payload))
    );}
)

);
};



export const toggleLike = (trackId) => (dispatch, getState) => {

const {session: {currentUser}} = getState();

if (currentUser.likes && currentUser.likes.includes(trackId)){
    dispatch(deleteLike(trackId));
    }else{
    dispatch(createLike(trackId)); 
    }
};


