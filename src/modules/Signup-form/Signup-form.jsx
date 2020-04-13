import React from 'react';
import { Form, SubmitButton, Input } from 'formik-antd';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { connect } from 'react-redux';

import { Block, ResultRegistration } from '../../components';
import { resetFormState, registration } from '../../redux/actions';

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
  isRegistered: auth.isRegistered,
});

const mapDispatchToProps = {
  registrationConnect: registration,
  resetFormStateConnect: resetFormState,
};

const SignupForm = ({ registrationConnect, isRegistered, resetFormStateConnect }) => {
  const onSubmit = (values, { setSubmitting, setErrors, resetForm }) => {
    registrationConnect(
      values,
      err => setErrors(err),
      () => setSubmitting(false)
    );
    if (isRegistered) resetForm();
  };

  if (isRegistered) {
    return <ResultRegistration success={isRegistered} resetFormState={resetFormStateConnect} />;
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
  isRegistered: false,
};

SignupForm.propTypes = {
  registrationConnect: PropTypes.func.isRequired,
  isRegistered: PropTypes.bool,
  resetFormStateConnect: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
