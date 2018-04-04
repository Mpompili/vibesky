import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';

const rootReducer = combineReducers({
  errors: errorsReducer,
  session: sessionReducer
});

export default rootReducer;
