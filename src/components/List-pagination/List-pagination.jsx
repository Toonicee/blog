import React from 'react';
import { connect } from 'react-redux';
import { Pagination } from 'antd';
import PropTypes from 'prop-types';

import { setPage, articleLoaded } from '../../redux/actions/article';

const mapStateToProps = ({ article }) => ({
  articles: article.articles,
  articlesCount: article.articlesCount,
});

const mapDispatchToProps = {
  onSetPage: setPage,
  getAllArticles: articleLoaded,
};

const ListPagination = ({ onSetPage, getAllArticles, articlesCount }) => {
  if (articlesCount <= 10) {
    return null;
  }

  const setPage = value => {
    onSetPage(value * 10, getAllArticles(value));
  };

  return (
    <nav>
      <Pagination onChange={value => setPage(value)} total={articlesCount} />
    </nav>
  );
};

ListPagination.defaultProps = {
  articlesCount: 0,
};

ListPagination.propTypes = {
  onSetPage: PropTypes.func.isRequired,
  getAllArticles: PropTypes.func.isRequired,
  articlesCount: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPagination);
