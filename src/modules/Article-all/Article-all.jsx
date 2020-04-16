import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { getProfile } from '../../redux/actions/profile';
import { getAllArticles } from '../../redux/actions';
import ArticleItem from '../Article-item/Article-item';
import { ListPagination } from '../../components';

const mapStateToProps = ({ articles }) => {
  return {
    articles: articles.articles,
    isProgress: articles.isProgress,
  };
};

const mapDispatchToProps = {
  getProfileConnect: getProfile,
  getAllArticlesConnect: getAllArticles,
};

class ArticleAll extends React.Component {
  componentDidMount() {
    const { getAllArticlesConnect } = this.props;
    getAllArticlesConnect();
  }

  render() {
    const { articles, getProfileConnect, isProgress } = this.props;
    return (
      <>
        <WrapperArticle>
          {articles.map(article => {
            return (
              <ArticleItem
                article={article}
                getProfileName={getProfileConnect}
                key={article.slug}
                isProgress={isProgress}
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
};

const WrapperPagination = styled.div`
  opacity: ${props => (props.isProgress ? 0.5 : 1)};
  margin: 50px 0 0 0;
`;

const WrapperArticle = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
`;

export default connect(mapStateToProps, mapDispatchToProps)(ArticleAll);
