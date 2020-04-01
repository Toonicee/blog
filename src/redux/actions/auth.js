import servisec from '../../servisec/servisec';

const registration = user => {
  return {
    type: 'REGISTER',
    payload: user,
  };
};

const login = user => {
  return {
    type: 'LOGIN',
    payload: user,
  };
};

const setUserDataSuccess = user => {
  return {
    type: 'SET_USER_DATA_SUCCESS',
    payload: user,
  };
};

const setUserDataFailure = err => {
  return {
    type: 'SET_USER_DATA_FAILURE',
    payload: err,
  };
};

const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

const setUserData = () => dispatch => {
  servisec.Auth.current()
    .then(res => {
      const user = res.data;
      dispatch(setUserDataSuccess(user));
    })
    .catch(error => {
      dispatch(setUserDataFailure(error));
    });
};

const loginUser = values => dispatch => {
  servisec.Auth.login({
    user: {
      email: values.email,
      password: values.password,
    },
  })
    .then(res => {
      const userData = res.data.user;
      dispatch(login({ user: userData }));
    })
    .catch(error => {
      const { errors } = error.response.data;
      setUserDataFailure(errors);
    });
};

const newUserRegistration = values => dispatch =>
  servisec.Auth.register({
    user: {
      username: values.username,
      email: values.email,
      password: values.password,
    },
  }).then(res => {
    const userData = res.data.user;
    dispatch(registration({ user: userData }));
  });
export { newUserRegistration, loginUser, logout, setUserData };
