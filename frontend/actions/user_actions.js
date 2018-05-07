import * as APIUtil from '../util/user_api_util'; 
export const RECEIVE_USER = 'RECEIVE_USER'; 
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS'; 

export const receiveUser = payload => ({
    type: RECEIVE_USER,
    payload 
});

export const receiveUserErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors 
});

export const fetchUser = (id) => dispatch => {
    APIUtil.fetchUser(id).then(payload => (
        dispatch(receiveUser(payload))
    ), 
        err => (
        dispatch(receiveUserErrors(err.responseJSON)) 
        ));
};

export const updateUser = (user, id) => dispatch => (
    APIUtil.updateUser(user, id).then(payload => (
        dispatch(receiveUser(payload))
    ), err => (
        dispatch(receiveUserErrors(err.responseJSON))
    ))
);