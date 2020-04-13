import { handleActions } from 'redux-actions';
import blogApi from '../../services/services';

const initialState = {
  currentUser: {},
  error: null,
  isAuthorizedUser: false,
  inProgress: false,
  isRegistered: false,
};

const auth = handleActions(
  {
    FETCH_USER_REQUEST: state => {
      return {
        ...state,
        inProgress: true,
      };
    },
    FETCH_USER_SUCCESS: (state, { payload }) => {
      return {
        ...state,
        currentUser: payload.user,
        inProgress: false,
        isAuthorizedUser: true,
      };
    },
    FETCH_USER_FAILURE: state => {
      return {
        ...state,
        inProgress: false,
      };
    },
    FETCH_REGISTER_SUCCESS: (state, { payload }) => {
      return {
        ...state,
        currentUser: payload,
        isRegistered: true,
      };
    },
    FETCH_AUTH_REQUEST: state => {
      return {
        ...state,
        inProgress: true,
      };
    },
    FETCH_AUTH_SUCCESS: (state, { payload }) => {
      return {
        ...state,
        currentUser: payload.user,
        inProgress: false,
        isAuthorizedUser: true,
      };
    },
    FETCH_AUTH_FAILURE: state => {
      return {
        ...state,
        inProgress: false,
      };
    },
    LOGOUT: () => {
      localStorage.setItem('jwt', '');
      blogApi.setToken(null);
      return { ...initialState };
    },
    RESET_FORM: state => {
      return {
        ...state,
        isRegistered: false,
      };
    },
  },
  initialState
);

export default auth;
