import {
    combineReducers
} from 'redux';
import questionsReducer from './question_reducer';

const entitiesReducer = combineReducers({
    questions: questionsReducer,
});

export default entitiesReducer;
