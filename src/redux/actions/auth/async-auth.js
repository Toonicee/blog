import { getCurrentUser, registerUser, loginUser, setToken } from '../../../services/services';
import * as actions from './auth';

const registrationUser = values => dispatch => {
  dispatch(actions.fetchRegisterRequest());
  return registerUser({
    user: {
      username: values.username,
      email: values.email,
      password: values.password,
    },
  }).then(res => {
    const { user } = res.data;
    dispatch(actions.fetchRegisterSuccess(user));
  });
};

const userLogin = values => dispatch => {
  dispatch(actions.fetchAuthRequest());
  return loginUser({
    user: {
      email: values.email,
      password: values.password,
    },
  }).then(res => {
    const userData = res.data.user;
    localStorage.setItem('jwt', userData.token);
    setToken(userData.token);
    dispatch(actions.fetchAuthSuccess({ user: userData }));
  });
};

const setUserData = () => dispatch => {
  const token = localStorage.getItem('jwt');
  if (token) {
    setToken(token);
  }
  dispatch(actions.fetchUserRequest());
  getCurrentUser()
    .then(res => {
      const user = res.data;
      dispatch(actions.fetchUserSuccess(user));
    })
    .catch(() => {
      dispatch(actions.fetchUserFailure());
    });
};

export { setUserData, userLogin, registrationUser };
