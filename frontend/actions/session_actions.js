import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = (errors) => ({
  type: REMOVE_CURRENT_USER
  errors
});

export const signup = (user) => (dispatch) => (
  APIUtil.signup(user).then(user => dispatch(receiveCurrentUser(user))
  ), err => (
  dispatch(receiveErrors(err.responseJSON))
);

export const login = (user) => (dispatch) => (
  APIUtil.login(user).then(user => dispatch(receiveCurrentUser(user))
  ), err => (
  dispatch(receiveErrors(err.responseJSON))
);

export const logout = () => (dispatch) => (
  APIUtil.login().then(user => dispatch(receiveCurrentUser(null))
  ), err => (
  dispatch(receiveErrors(err.responseJSON))
);
