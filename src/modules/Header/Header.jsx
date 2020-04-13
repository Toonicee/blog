import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logout } from '../../redux/actions/auth/auth';
import { getProfile } from '../../redux/actions/profile';
import { AddPost, Container, LinkAuthPage, UserName, LinkHomePage } from '../../components';

const mapStateToProps = ({ auth }) => ({
  username: auth.currentUser.username,
  isAuthorizedUser: auth.isAuthorizedUser,
});

const mapDispatchToProps = {
  logoutConnect: logout,
  getProfileConnect: getProfile,
};

const Header = ({ getProfileConnect, isAuthorizedUser, logoutConnect, username }) => {
  return (
    <HeaderWrapper>
      <Container>
        <div>
          <LinkHomePage />
          {isAuthorizedUser ? (
            <>
              <UserName profileName={getProfileConnect} username={username} />
              <AddPost />
            </>
          ) : null}
        </div>
        <div>
          {isAuthorizedUser ? (
            <Button onClick={logoutConnect}>
              <i className="fa fa-sign-in" aria-hidden="true" /> выход
            </Button>
          ) : (
            <LinkAuthPage />
          )}
        </div>
      </Container>
    </HeaderWrapper>
  );
};

Header.defaultProps = {
  isAuthorizedUser: false,
  username: '',
};

Header.propTypes = {
  logoutConnect: PropTypes.func.isRequired,
  getProfileConnect: PropTypes.func.isRequired,
  isAuthorizedUser: PropTypes.bool,
  username: PropTypes.string,
};

const HeaderWrapper = styled.header`
  background: #eee;
  padding: 30px 0;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default connect(mapStateToProps, mapDispatchToProps)(Header);
