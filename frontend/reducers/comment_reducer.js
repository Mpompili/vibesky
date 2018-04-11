import { RECEIVE_TRACK } from '../actions/track_actions';
import { REMOVE_COMMENT } from '../actions/comment_actions';
import merge from 'lodash/merge';

const commentReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_TRACK:
      return merge({}, oldState, action.payload.comments);
    case REMOVE_COMMENT:
      newState = merge({}, oldState);
      delete newState[action.commentId];
      return newState;
    default:
      return oldState;
  }
};

export default commentReducer;


// newState = {action.payload.comments}
// newState = {[action.payload.comments]: action.payload.comment};