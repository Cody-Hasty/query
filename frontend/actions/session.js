import { postUser, deleteSession, postSession } from '../utils/session'
import { receiveErrors, clearErrors } from './error';


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const SESSION_ERROR = "SESSION_ERROR";

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    
    // this is the payload variable we recieve back
    user,
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const sessionError = error => ({
    type: SESSION_ERROR,
    error
})

// formUser is from the html (our code), dispatch is from middleware (not our code)
export const createNewUser = formUser => dispatch => postUser(formUser)
    .then(user => {
            dispatch(receiveCurrentUser(user));
            dispatch(clearErrors())
        },
        err => dispatch(receiveErrors(err.responseJSON))
    );


export const login = formUser => dispatch => postSession(formUser)
    .then(user => {
            dispatch(receiveCurrentUser(user));
            dispatch(clearErrors())
        },
        err => dispatch(receiveErrors(err.responseJSON))
    );

export const logout = () => dispatch => deleteSession()
    .then(() => dispatch(logoutCurrentUser()));