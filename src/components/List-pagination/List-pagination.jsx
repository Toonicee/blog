import React from 'react';
import { connect } from 'react-redux';
import { Pagination } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getAllArticles } from '../../redux/actions';

const mapStateToProps = ({ articles }) => ({
  articles: articles.articles,
  articlesCount: articles.articlesCount,
});

const mapDispatchToProps = {
  getAllArticlesConnect: getAllArticles,
};

const ListPagination = ({ getAllArticlesConnect, articlesCount }) => {
  if (articlesCount <= 10) {
    return null;
  }

  return (
    <Nav>
      <Pagination onChange={value => getAllArticlesConnect(value - 1)} total={articlesCount} />
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

ListPagination.defaultProps = {
  articlesCount: 0,
};

ListPagination.propTypes = {
  getAllArticlesConnect: PropTypes.func.isRequired,
  articlesCount: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPagination);
