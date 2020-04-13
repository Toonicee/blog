import { createAction } from 'redux-actions';

// registration actions
export const fetchRegisterRequest = createAction('FETCH_REGISTER_REQUEST');
export const fetchRegisterSuccess = createAction('FETCH_REGISTER_SUCCESS');
export const fetchRegisterFailure = createAction('FETCH_REGISTER_FAILURE');

// authorization actions
export const fetchAuthRequest = createAction('FETCH_AUTH_REQUEST');
export const fetchAuthSuccess = createAction('FETCH_AUTH_SUCCESS');
export const fetchAuthFailure = createAction('FETCH_AUTH_FAILURE');

// current user actions
export const fetchUserRequest = createAction('FETCH_USER_REQUEST');
export const fetchUserSuccess = createAction('FETCH_USER_SUCCESS');
export const fetchUserFailure = createAction('FETCH_USER_FAILURE');

export const logout = createAction('LOGOUT');
export const resetFormState = createAction('RESET_FORM');
