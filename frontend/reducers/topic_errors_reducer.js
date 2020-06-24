import {
    REMOVE_TOPIC_ERRORS,
    RECEIVE_TOPIC_ERRORS
} from '../actions/topic_actions';

const topicErrorsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_TOPIC_ERRORS:
            return Object.assign({}, oldState, {
                errors: action.errors
            });
        case REMOVE_TOPIC_ERRORS:
            return Object.assign({}, oldState, {
                errors: []
            });
        default:
            return oldState;
    }
}

export default topicErrorsReducer;