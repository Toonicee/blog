import React, { useState } from 'react';
import { Form, SubmitButton, Input } from 'formik-antd';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { connect } from 'react-redux';

import { Block, ResultRegistration } from '../../components';
import { fetchRegisterFailure } from '../../redux/actions/auth/auth';
import { registrationUser } from '../../redux/actions';

const validation = Yup.object().shape({
  username: Yup.string().required('Введите ваше имя'),
  password: Yup.string().required('Введите пароль'),
  repeatPassword: Yup.string()
    .test('passwords-match', 'Пароли не совподают', function(value) {
      return this.parent.password === value;
    })
    .required('Required'),
  email: Yup.string().required('Введите ваш E-mail'),
});

const mapStateToProps = ({ auth }) => ({
  username: auth.currentUser.username,
});

const mapDispatchToProps = {
  registrationUserConnect: registrationUser,
  fetchRegisterFailureConnect: fetchRegisterFailure,
};

const SignupForm = ({ registrationUserConnect, username, fetchRegisterFailureConnect }) => {
  const [isRegistered, changeState] = useState(false);
  const onSubmit = (values, { setSubmitting, setErrors }) => {
    registrationUserConnect(values).catch(error => {
      const { errors } = error.response.data;
      fetchRegisterFailureConnect();
      setErrors(errors);
      setSubmitting(false);
    });
    changeState(true);
  };

  if (username && isRegistered) {
    return <ResultRegistration success resetFormState={changeState} />;
  }
  return (
    <>
      <div>
        <h2 className="auth__title">Регистрация</h2>
        <p className="auth__text">Для входа, вам нужно зарегистрироваться</p>
      </div>
      <Block backcolor="#fff">
        <Formik
          initialValues={{
            username: '',
            password: '',
            repeatPassword: '',
            email: '',
          }}
          validationSchema={validation}
          onSubmit={onSubmit}
        >
          <Form>
            <Form.Item name="email">
              <Input
                prefix={<Icon type="mail" />}
                size="large"
                type="email"
                name="email"
                placeholder="E-mail"
              />
            </Form.Item>
            <Form.Item name="username">
              <Input
                prefix={<Icon type="user" />}
                size="large"
                name="username"
                placeholder="Ваше имя"
              />
            </Form.Item>
            <Form.Item name="password">
              <Input.Password
                prefix={<Icon type="lock" />}
                size="large"
                name="password"
                placeholder="Пароль"
              />
            </Form.Item>
            <Form.Item name="repeatPassword">
              <Input.Password
                prefix={<Icon type="lock" />}
                size="large"
                name="repeatPassword"
                placeholder="Повторите пароль"
              />
            </Form.Item>
            <div>
              <SubmitButton size="large" block>
                Зарегистрироваться
              </SubmitButton>
            </div>
            <div className="form__link">
              <Link to="/login">Войти в аккаунт</Link>
            </div>
          </Form>
        </Formik>
      </Block>
    </>
  );
};

SignupForm.defaultProps = {
  username: '',
};

SignupForm.propTypes = {
  username: PropTypes.string,
  registrationUserConnect: PropTypes.func.isRequired,
  fetchRegisterFailureConnect: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
