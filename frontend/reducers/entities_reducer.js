import { combineReducers } from 'redux';
import trackReducer from './track_reducer';
import commentReducer from './comment_reducer';
import userReducer from './user_reducer'; 

const entitiesReducer = combineReducers({
  tracks: trackReducer,
  comments: commentReducer,
  users: userReducer
});

export default entitiesReducer; 
