import blogApi from '../../../services/services';
import * as actions from './auth';

const registration = (values, cbError = () => {}, cbSubmitting = () => {}) => dispatch => {
  dispatch(actions.fetchRegisterRequest());
  blogApi.Auth.register({
    user: {
      username: values.username,
      email: values.email,
      password: values.password,
    },
  })
    .then(res => {
      const { user } = res.data;
      dispatch(actions.fetchRegisterSuccess(user));
      cbSubmitting();
    })
    .catch(error => {
      dispatch(actions.fetchRegisterFailure());
      const { errors } = error.response.data;
      cbError(errors);
      cbSubmitting();
    });
};

const loginUser = values => dispatch => {
  dispatch(actions.fetchAuthRequest());
  blogApi.Auth.login({
    user: {
      email: values.email,
      password: values.password,
    },
  })
    .then(res => {
      const userData = res.data.user;
      localStorage.setItem('jwt', userData.token);
      blogApi.getToken(userData.token);
      dispatch(actions.fetchAuthSuccess({ user: userData }));
    })
    .catch(() => {
      dispatch(actions.fetchAuthFailure());
    });
};

const setUserData = () => dispatch => {
  const token = localStorage.getItem('jwt');
  if (token) {
    blogApi.setToken(token);
  }
  dispatch(actions.fetchUserRequest());
  blogApi.Auth.current()
    .then(res => {
      const user = res.data;
      dispatch(actions.fetchUserSuccess(user));
    })
    .catch(() => {
      dispatch(actions.fetchUserFailure());
    });
};

export { setUserData, loginUser, registration };
