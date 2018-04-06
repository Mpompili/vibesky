import { combineReducers } from 'redux';
import trackReducer from './track_reducer';

const entitiesReducer = combineReducers({
  tracks: trackReducer
});

export default entitiesReducer; 
