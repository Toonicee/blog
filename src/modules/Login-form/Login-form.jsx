import React from 'react';
import PropTypes from 'prop-types';
import { Form, SubmitButton, Input } from 'formik-antd';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { Icon } from 'antd';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import { Block } from '../../components';
import { loginUser } from '../../redux/actions/auth/async-auth';

const validation = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Must be 8 characters or more')
    .max(40, 'Must be 40 characters or less')
    .test(
      'pass',
      'Latin letters and numbers only, at least one number and one capital letter',
      value => /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/.test(value)
    )
    .required('Required'),
  email: Yup.string()
    .email('Введите коректные E-mail')
    .required('Введите ваш E-mail'),
});

const mapStateToProps = ({ auth }) => ({
  email: auth.currentUser.email,
});

const mapDispatchToProps = {
  loginUser,
};

const LoginForm = ({ loginUser, email }) => {
  const onSubmit = (values, { setSubmitting, setErrors }) => {
    loginUser(values, setSubmitting, setErrors);
  };
  return (
    <>
      <div>
        <h2 className="auth__title">Войти в аккаунт</h2>
        <p className="auth__text">Пожалуйста, войдите в свой аккаунт</p>
      </div>
      <Block backcolor="#fff">
        <Formik
          initialValues={{
            password: '',
            email: `${email || ''}`,
          }}
          validationSchema={validation}
          onSubmit={onSubmit}
        >
          <Form>
            <Form.Item name="email">
              <Input
                prefix={<Icon type="user" />}
                size="large"
                type="email"
                name="email"
                placeholder="E-mail"
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
            <div>
              <SubmitButton size="large" block>
                Войти в аккаунт
              </SubmitButton>
            </div>
            <div className="form__link">
              <Link to="/signup">Зарегистрироваться</Link>
            </div>
          </Form>
        </Formik>
      </Block>
    </>
  );
};

LoginForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
