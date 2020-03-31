import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { PostForm, Header } from '../../modules';

const mapStateToProps = ({ auth }) => ({
  isAutoUser: auth.isAutoUser,
});

const CreatePost = ({ isAutoUser }) => {
  if (!isAutoUser) return <Redirect to="/login" />;
  return (
    <>
      <Header />
      <Wrapper>
        <PostForm />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin: 50px 0;
`;

export default connect(mapStateToProps)(CreatePost);
