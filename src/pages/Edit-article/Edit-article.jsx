import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Header, PostForm } from '../../modules';

const mapStateToProps = ({ auth }) => ({
  isAuthorizedUser: auth.isAuthorizedUser,
});

const EditArticle = ({ isAuthorizedUser }) => {
  if (!isAuthorizedUser) return <Redirect to="/login" />;
  return (
    <>
      <Header />
      <Wrapper>
        <PostForm />
      </Wrapper>
    </>
  );
};

EditArticle.defaultProps = {
  isAuthorizedUser: false,
};

EditArticle.propTypes = {
  isAuthorizedUser: PropTypes.bool,
};

const Wrapper = styled.div`
  margin: 50px 0;
`;
export default connect(mapStateToProps)(EditArticle);
