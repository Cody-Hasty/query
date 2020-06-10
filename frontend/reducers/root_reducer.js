import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import questionReducer from './question_reducer';
import errorsReducer from './errors_reducer';

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  questions: questionReducer,
  errors: errorsReducer,
});
