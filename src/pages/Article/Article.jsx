import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Header, ArticlePreview, CommentList } from '../../modules';
import { Container } from '../../components';
import { getArticle, getAllComments, resetState } from '../../redux/actions';

const mapStateToProps = ({ article, auth }) => ({
  article: article.articleCurrent,
  isProgress: article.isProgress,
  username: auth.currentUser.username,
  articleState: article.articleState,
});

const mapDispatchToProps = {
  getArticleConnect: getArticle,
  getAllCommentsConnect: getAllComments,
  resetStateConnect: resetState,
};

class Article extends React.Component {
  componentDidMount() {
    const { getArticleConnect, getAllCommentsConnect } = this.props;
    const articleSlug = localStorage.getItem('articleSlug');
    getArticleConnect(articleSlug);
    getAllCommentsConnect(articleSlug);
  }

  render() {
    const { article, isProgress, username, articleState } = this.props;
    if (articleState === 'delete') {
      return <Redirect to="/" />;
    }

    return (
      <>
        <Header />
        <Container>
          <Main>
            <ArticlePreview username={username} article={article} isProgress={isProgress} />
            <CommentList />
          </Main>
        </Container>
      </>
    );
  }
}

Article.defaultProps = {
  isProgress: false,
  username: '',
  articleState: '',
};

Article.propTypes = {
  getArticleConnect: PropTypes.func.isRequired,
  getAllCommentsConnect: PropTypes.func.isRequired,
  article: PropTypes.instanceOf(Object).isRequired,
  articleState: PropTypes.string,
  isProgress: PropTypes.bool,
  username: PropTypes.string,
};

const Main = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default connect(mapStateToProps, mapDispatchToProps)(Article);
