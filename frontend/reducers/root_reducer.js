import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import trackplayerReducer from './trackplayer_reducer';
import UIReducer from './ui_reducer'; 

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
  session: sessionReducer,
  trackplayer: trackplayerReducer,
  ui: UIReducer
});

export default rootReducer;
