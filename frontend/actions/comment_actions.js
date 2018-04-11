import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK'; 

export const receiveCommentErrors = errors => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors 
});

export const removeComment = commentId => ({
    type: RECEIVE_COMMENT_ERRORS,
    commentId 
});

export const createComment = (comment, id) => dispatch => (
    APIUtil.createComment(comment, id).then(payload => (
    dispatch({type: RECEIVE_TRACK, payload: payload})
    ), err => (
        dispatch(receiveCommentErrors(err.responseJSON))
    ))
);

export const deleteComment = commentId => dispatch => (
    APIUtil.deleteComment(commentId).then(comment => (
    dispatch(removeComment(commentId))
    ), err => (
        dispatch(receiveCommentErrors(err.responseJSON))
    ))
);