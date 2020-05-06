import {
    RECEIVE_QUESTIONS,
    RECEIVE_QUESTION,
    REMOVE_QUESTION
} from '../actions/question_actions';

const questionReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = {};

    switch (action.type) {
        case RECEIVE_QUESTIONS:
            action.questions.forEach( question => {
                nextState[question.id] = question;
            });
            return nextState;
        case RECEIVE_QUESTION:
            const newQuestion = { [action.question.id]: action.question};
            return Object.assign({}, state, newQuestion);
        case REMOVE_QUESTION:
            nextState = Object.assign({}, state);
            delete nextState[action.quesiton.id];
            return nextState;
        default:
            return state;
    }
};

export default questionReducer;