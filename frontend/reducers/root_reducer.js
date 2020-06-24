import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import questionReducer from './question_reducer';
import topicReducer from './topic_reducer';
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  questions: questionReducer,
  topics: topicReducer,
  errors: errorsReducer,
});

export default rootReducer;