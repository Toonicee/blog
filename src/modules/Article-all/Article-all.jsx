import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { getProfile } from '../../redux/actions/profile';
import { getArticle, getAllArticles } from '../../redux/actions';
import ArticleItem from '../Article-item/Article-item';
import { ListPagination, Loading } from '../../components';

const mapStateToProps = ({ articles }) => {
  return {
    articles: articles.articles,
    isProgress: articles.isProgress,
  };
};

const mapDispatchToProps = {
  getProfileConnect: getProfile,
  getAllArticlesConnect: getAllArticles,
  getArticleConnect: getArticle,
};

class ArticleAll extends React.Component {
  componentDidMount() {
    const { getAllArticlesConnect } = this.props;
    getAllArticlesConnect();
  }

  render() {
    const { articles, getProfileConnect, getArticleConnect, isProgress } = this.props;
    return (
      <>
        <WrapperLoading isProgress={isProgress}>
          <Loading />
        </WrapperLoading>
        <WrapperArticle isProgress={isProgress}>
          {articles.map(article => {
            return (
              <ArticleItem
                article={article}
                getArticle={getArticleConnect}
                getProfileName={getProfileConnect}
                key={article.slug}
              />
            );
          })}
        </WrapperArticle>
        <WrapperPagination isProgress={isProgress}>
          <ListPagination />
        </WrapperPagination>
      </>
    );
  }
}

ArticleAll.defaultProps = {
  isProgress: false,
};

ArticleAll.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  isProgress: PropTypes.bool,
  getProfileConnect: PropTypes.func.isRequired,
  getAllArticlesConnect: PropTypes.func.isRequired,
  getArticleConnect: PropTypes.func.isRequired,
};

const WrapperLoading = styled.div`
  display: ${props => (props.isProgress ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  top: 30%;
  right: 42%;
`;

const WrapperPagination = styled.div`
  opacity: ${props => (props.isProgress ? 0.5 : 1)};
  margin: 50px 0;
`;

const WrapperArticle = styled.div`
  opacity: ${props => (props.isProgress ? 0.5 : 1)};
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
`;

export default connect(mapStateToProps, mapDispatchToProps)(ArticleAll);
