import { combineReducers } from 'redux';
import questionReducer from './question_reducer';
import topicReducer from './topic_reducer';

const entitiesReducer = combineReducers({
    questions: questionReducer,
    topics: topicReducer,
});

export default entitiesReducer;
