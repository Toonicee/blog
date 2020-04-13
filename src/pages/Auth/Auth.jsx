import React from 'react';
import styled from 'styled-components';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { LoginForm, SignupForm } from '../../modules';

const mapStateToProps = ({ auth }) => ({
  isAuthorizedUser: auth.isAuthorizedUser,
});

const Auth = ({ isAuthorizedUser }) => {
  if (isAuthorizedUser) return <Redirect to="/" />;
  return (
    <WrapperForm>
      <div>
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignupForm} />
      </div>
    </WrapperForm>
  );
};

Auth.defaultProps = {
  isAuthorizedUser: false,
};

Auth.propTypes = {
  isAuthorizedUser: PropTypes.bool,
};

const WrapperForm = styled.div`
  text-align: center;
  color: #202002;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;

  > div {
    width: 400px;
    max-width: 75%;
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
