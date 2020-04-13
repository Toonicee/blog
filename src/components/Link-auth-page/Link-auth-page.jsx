import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkAuthPage = () => {
  return (
    <WrapperLink>
      <Link to="/login">Войти</Link>
      <Span>или</Span>
      <Link to="/signup">зарегистрироваться</Link>
    </WrapperLink>
  );
};

const WrapperLink = styled.div``;

const Span = styled.span`
  margin: 0 5px;
`;
export default LinkAuthPage;
