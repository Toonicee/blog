import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Icon } from 'antd';
import PropTypes from 'prop-types';

import { delArticle } from '../../redux/actions';

const mapDispatchToProps = {
  delArticleConnect: delArticle,
};

const Management = ({ slug, delArticleConnect }) => {
  return (
    <WrapperManagement>
      <Link className="management_link btn" to={`/articles/${slug}/edit`}>
        <Icon type="edit" />
        Редактировать
      </Link>
      <button className="management_btn btn" onClick={() => delArticleConnect(slug)} type="button">
        <Icon type="delete" />
        Удалить
      </button>
    </WrapperManagement>
  );
};

Management.propTypes = {
  slug: PropTypes.string.isRequired,
  delArticleConnect: PropTypes.func.isRequired,
};

const WrapperManagement = styled.div`
  .management_btn {
    color: #b85c5c;
    border: 1px solid #b85c5c;
    margin: 0 15px;

    &:hover {
      color: #fff;
      background: #b85c5c;
    }
    &:focus {
      color: #fff;
      background: #b85c5c;
    }
    &:active {
      color: #fff;
      background: #b85c5c;
    }
  }
  .management_link {
    color: #1890ff;
    border: 1px solid #1890ff;

    &:hover {
      color: #fff;
      background: #1890ff;
    }
    &:focus {
      color: #fff;
      background: #1890ff;
    }
    &:active {
      color: #fff;
      background: #1890ff;
    }
  }
  .btn {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    border-radius: 0.2rem;
    display: inline-block;
    font-weight: 400;
    line-height: 1.25;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
  }
`;

export default connect(() => ({}), mapDispatchToProps)(Management);
