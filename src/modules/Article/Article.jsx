import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { articleLoaded, downloadProgress } from '../../redux/actions/article';
import { ArticleItem, ListPagination, Container } from '../../components';

const mapStateToProps = state => {
  return {
    articles: state.article.articles,
    currentPage: state.article.currentPage,
  };
};

const mapDispatchToProps = {
  articleLoaded,
  downloadProgress,
};

const Article = ({ articles }) => {
  return (
    <div>
      <Container>
        {articles.map(article => {
          return <ArticleItem article={article} key={article.slug} />;
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

export default connect(mapStateToProps, mapDispatchToProps)(Article);
