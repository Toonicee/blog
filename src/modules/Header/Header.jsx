import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { logout } from '../../redux/actions/auth';
import { AddPost, Container } from '../../components';

const mapStateToProps = ({ auth }) => ({
  currentUser: auth.currentUser,
});

const mapDispatchToProps = {
  onLogout: logout,
};

const Header = ({ onLogout, currentUser: { username }, history }) => {
  const { pathname } = useLocation();
  return (
    <HeaderWrapper>
      <Container>
        <div>
          <h2>
            <Link to="/">{username}</Link>
          </h2>
          {pathname === '/add' ? null : <AddPost />}
        </div>
        <div>
          <Button onClick={onLogout}>выход</Button>
        </div>
      </Container>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  background: #eee;
  padding: 30px 0;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default connect(mapStateToProps, mapDispatchToProps)(Header);
