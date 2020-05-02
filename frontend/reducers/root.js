import { combineReducers } from 'redux';
import entitiesReducer from './entities';
import sessionReducer from './session';
import errorsReducer from './error';

export default combineReducers({
  // entities: entitiesReducer,
  session: sessionReducer,
  error: errorsReducer,
});
