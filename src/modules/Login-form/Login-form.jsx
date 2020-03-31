import React from 'react';
import PropTypes from 'prop-types';
import { Form, SubmitButton } from 'formik-antd';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import { Block, InputTypePassword, InputTypeText } from '../../components';
import { loginUser } from '../../redux/actions/auth';

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

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

const mapDispatchToProps = {
  onLogin: loginUser,
};

const LoginForm = props => {
  console.log(props);
  const onSubmit = (values, { setSubmitting, setErrors }) => {
    props.onLogin(values, setSubmitting, setErrors);
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
            email: '',
          }}
          validationSchema={validation}
          onSubmit={onSubmit}
        >
          <Form>
            <InputTypeText
              type="email"
              name="email"
              placeholder="E-mail"
              icon="mail"
              size="large"
            />
            <InputTypePassword name="password" placeholder="Пароль" size="large" />
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
  onLogin: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
