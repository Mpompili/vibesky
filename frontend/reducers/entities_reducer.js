import { combineReducers } from 'redux';
import trackReducer from './track_reducer';
import commentReducer from './comment_reducer';

const entitiesReducer = combineReducers({
  tracks: trackReducer,
  comments: commentReducer 
});

export default entitiesReducer; 
