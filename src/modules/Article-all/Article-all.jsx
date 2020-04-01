import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { profileName } from '../../redux/actions/profile';
import { ArticleItem, ListPagination, Container } from '../../components';

const mapStateToProps = state => {
  return {
    articles: state.article.articles,
    currentPage: state.article.currentPage,
  };
};

const mapDispatchToProps = {
  profileName,
};

const ArticleAll = ({ articles, profileName }) => {
  return (
    <div>
      <Container>
        {articles.map(article => {
          return <ArticleItem article={article} getProfileName={profileName} key={article.slug} />;
        })}
        <WrapperPagination>
          <ListPagination />
        </WrapperPagination>
      </Container>
    </div>
  );
};

const WrapperPagination = styled.div`
  margin: 50px 0;
`;

export default connect(mapStateToProps, mapDispatchToProps)(ArticleAll);
