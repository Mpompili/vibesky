import * as APIUtil from '../util/comment_api_util';
import { receiveTrack } from './track_actions'; 

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK'; 

export const receiveCommentErrors = errors => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors 
});

export const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId 
});

export const createComment = (comment, id) => dispatch => (
    APIUtil.createComment(comment, id).then(payload => (
        dispatch(receiveTrack(payload))
    ))
);

export const deleteComment = commentId => dispatch => (
    APIUtil.deleteComment(commentId).then(payload => (
    dispatch(receiveTrack(payload))
    ))
);

// .then(payload => (
//     dispatch({type: RECEIVE_TRACK, payload: payload})
//     ), err => (
//         dispatch(receiveCommentErrors(err.responseJSON))
//     ))