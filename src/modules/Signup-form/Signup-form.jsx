import React from 'react';
import { Form, SubmitButton } from 'formik-antd';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { connect } from 'react-redux';

import { Block, InputTypePassword, InputTypeText } from '../../components';
import { newUserRegistration } from '../../redux/actions/auth';

const validata = Yup.object().shape({
  username: Yup.string()
    .max(50, 'Имя должно содержать не более 50 символов')
    .required('Введите ваше имя'),
  password: Yup.string()
    .min(8, 'Должно быть 8 символов или более')
    .max(40, 'Должно быть не более 40 символов')
    .test(
      'pass',
      'Только латинские буквы и цифры, хотя бы одна цифра и одна заглавная буква',
      value => /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/.test(value)
    )
    .required('Введите пароль'),
  repeatPassword: Yup.string()
    .test('passwords-match', 'Пароли не совподают', function(value) {
      return this.parent.password === value;
    })
    .required('Required'),
  email: Yup.string()
    .email('Введите коректные E-mail')
    .required('Введите ваш E-mail'),
});

const mapStateToProps = ({ auth }) => ({
  error: auth.error,
});

const mapDispatchToProps = {
  newUserRegistration,
};

const SignupForm = ({ newUserRegistration }) => {
  const onSubmit = (values, { setSubmitting, setErrors }) => {
    newUserRegistration(values).catch(error => {
      const { errors } = error.response.data;
      setErrors(errors);
    });
    setSubmitting(false);
  };

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
          validationSchema={validata}
          onSubmit={onSubmit}
        >
          <Form>
            <InputTypeText type="mail" name="email" placeholder="E-Mail" icon="mail" size="large" />
            <InputTypeText name="username" placeholder="Ваше имя" icon="user" size="large" />
            <InputTypePassword name="password" placeholder="Пароль" />
            <InputTypePassword name="repeatPassword" placeholder="Повторите пароль" size="large" />
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
