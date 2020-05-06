import * as QuestionAPIUtil from '../utils/question_utils';

export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';
export const QUESTION_ERROR = 'QUESTION_ERROR';

export const receiveQuestion = question => ({
    type: RECEIVE_QUESTION,
    question
});

export const receiveQuestions = questions => ({
    type: RECEIVE_QUESTIONS,
    questions
});

export const removeQuestion = question => ({
    type: REMOVE_QUESTION,
    question
});

export const questionError = error => ({
    type: QUESTION_ERROR,
    error
});

export const fetchQuestions = (questions) => dispatch => (
    QuestionAPIUtil.fetchQuestions(questions)
    .then((questions) => (dispatch(receiveQuestions(questions)))
))

export const fetchQuestion = (id) => dispatch => (
    QuestionAPIUtil.fetchQuestion(id)
    .then(question => (dispatch(receiveQuestion(question)))
))

export const createQuestion = question => dispatch => (
    QuestionAPIUtil.createQuestion(question)
    .then(question => (dispatch(receiveQuestion(question)))
))

export const updateQuestion = question => dispatch => (
    QuestionAPIUtil.updateQuestion(question)
    .then(question => (dispatch(receiveQuestion(question)))
))

export const deleteQuestion = question => dispatch => (
    QuestionAPIUtil.deleteQuestion(question)
    .then(question => (dispatch(removeQuestion(question)))
))