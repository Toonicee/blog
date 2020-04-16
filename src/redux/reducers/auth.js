import { handleActions } from 'redux-actions';
import { setToken } from '../../services/services';

const initialState = {
  currentUser: {},
  error: false,
  isAuthorizedUser: false,
  inProgress: false,
  isSuccess: false,
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
        error: true,
      };
    },
    FETCH_REGISTER_REQUEST: state => {
      return {
        ...state,
        inProgress: true,
      };
    },
    FETCH_REGISTER_SUCCESS: (state, { payload }) => {
      return {
        ...state,
        currentUser: payload,
      };
    },
    FETCH_REGISTER_FAILURE: state => {
      return {
        ...state,
        inProgress: false,
        error: true,
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
        error: true,
      };
    },
    LOGOUT: () => {
      localStorage.setItem('jwt', '');
      setToken(null);
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
