import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { PostForm, Header } from '../../modules';

const mapStateToProps = ({ auth }) => ({
  isAuthorizedUser: auth.isAuthorizedUser,
});

const CreatePost = ({ isAuthorizedUser }) => {
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

CreatePost.defaultProps = {
  isAuthorizedUser: false,
};

CreatePost.propTypes = {
  isAuthorizedUser: PropTypes.bool,
};

const Wrapper = styled.div`
  margin: 50px 0;
`;

export default connect(mapStateToProps)(CreatePost);
