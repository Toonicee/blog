import React from 'react';
import styled from 'styled-components';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginForm, SignupForm } from '../../modules';

const mapStateToProps = ({ auth }) => ({
  isAutoUser: auth.isAutoUser,
});

const Auth = ({ isAutoUser }) => {
  if (isAutoUser) return <Redirect to="/home" />;
  return (
    <WrapperForm>
      <>
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignupForm} />
      </>
    </WrapperForm>
  );
};

const WrapperForm = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #202002;

  .block {
    width: 100%;
    max-width: 28%;
  }

  .auth__title {
    font-size: 28px;
    line-height: 33px;
    margin-bottom: 5px;
  }
  .form__link {
    margin-top: 30px;

    a {
      font-size: 16px;
      line-height: 19px;
      color: #adadad;

      &:hover {
        color: #1890ff;
      }
      &:focus {
        color: #1890ff;
      }
      &:active {
        color: #1890ff;
      }
    }
  }

  .auth__text {
    opacity: 0.5;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
  }
  .btn {
    width: 200px;
    height: 200px;
    background: #000;
  }
  .btn-2 {
    background: red;
  }
`;

export default connect(mapStateToProps)(Auth);
