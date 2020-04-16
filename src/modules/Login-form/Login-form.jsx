import React from 'react';
import PropTypes from 'prop-types';
import { Form, SubmitButton, Input } from 'formik-antd';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { Icon } from 'antd';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import { Block } from '../../components';
import { userLogin } from '../../redux/actions/auth/async-auth';
import { fetchAuthFailure } from '../../redux/actions/auth/auth';

const validation = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Must be 8 characters or more')
    .max(40, 'Must be 40 characters or less')
    .required('Required'),
  email: Yup.string()
    .email('Введите коректные E-mail')
    .required('Введите ваш E-mail'),
});

const mapStateToProps = ({ auth }) => ({
  email: auth.currentUser.email,
});

const mapDispatchToProps = {
  userLoginConnect: userLogin,
  fetchAuthFailureConnect: fetchAuthFailure,
};

const LoginForm = ({ userLoginConnect, email, fetchAuthFailureConnect }) => {
  const onSubmit = (values, { setSubmitting, setErrors }) => {
    userLoginConnect(values).catch(error => {
      const { errors } = error.response.data;
      fetchAuthFailureConnect();
      setSubmitting(false);
      setErrors(errors);
    });
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

LoginForm.defaultProps = {
  email: '',
};

LoginForm.propTypes = {
  fetchAuthFailureConnect: PropTypes.func.isRequired,
  userLoginConnect: PropTypes.func.isRequired,
  email: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
