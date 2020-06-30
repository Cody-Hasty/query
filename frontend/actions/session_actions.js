import { postUser, deleteSession, postSession } from '../utils/session_utils'

export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const REMOVE_SESSION_ERRORS = "REMOVE_SESSION_ERRORS";

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const removeSessionErrors = () => ({
    type: REMOVE_SESSION_ERRORS,
});

export const createNewUser = formUser => dispatch => (
    postUser(formUser)
        .then((formUser) => (dispatch(receiveCurrentUser(formUser))),
        (err) => (dispatch(receiveSessionErrors(err.responseJSON)))));

export const login = user => dispatch => (
    postSession(user)
        .then((user) => (dispatch(receiveCurrentUser(user))),
        (err) => (dispatch(receiveSessionErrors(err.responseJSON)))));

export const logout = () => dispatch => (
    deleteSession()
        .then(() => dispatch(logoutCurrentUser())));
