import React from 'react';
import styled from 'styled-components';
import { Header, ArticleAll } from '../../modules';

const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <ArticleAll />
      </Main>
    </>
  );
};

const Main = styled.main`
  margin-top: 30px;
  padding-bottom: 50px;
`;

export default Home;
