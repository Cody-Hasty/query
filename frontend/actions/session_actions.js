import { postUser, deleteSession, postSession } from '../utils/session_utils'


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const SESSION_ERROR = "SESSION_ERROR";

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    
    // this is the payload variable we recieve back
    user
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const sessionError = errors => ({
    type: SESSION_ERROR,
    errors
})

// formUser is from the html (our code), dispatch is from middleware (not our code)
export const createNewUser = formUser => dispatch => postUser(formUser)
    .then(user => {
            dispatch(receiveCurrentUser(user));
            // dispatch(sessionError(responseJSON))
        },
        err => dispatch(sessionError(err.responseJSON))
    );


export const login = formUser => dispatch => postSession(formUser)
    .then(user => {
            dispatch(receiveCurrentUser(user));
        },
        err => dispatch(sessionError(err.responseJSON))
    );

export const logout = () => dispatch => deleteSession()
    .then(() => dispatch(logoutCurrentUser())
    );