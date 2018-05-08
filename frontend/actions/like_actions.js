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
        console.log('CREATELIKE payload: ', payload);
        return (
        dispatch(receiveLike(payload))
    );}
)
);

export const deleteLike = trackId => dispatch => {
    console.log('in deleteLike actions: ', trackId); 
    return (
    APIUtil.deleteLike(trackId).then(payload => {
        console.log('payload is: ', payload); 
        // console.log('payload.track is: ', payload.track); 
        // console.log('payload.track.id is: ', payload.track.id); 
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


