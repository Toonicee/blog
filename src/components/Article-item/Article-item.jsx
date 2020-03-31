import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ArticleItem = ({ article }) => {
  return (
    <WrapperArticle>
      <ArticleHeader>
        <div>
          <a href="#">
            <div>
              <img
                className="article__image"
                src={article.author.image}
                alt={article.author.username}
              />
            </div>
          </a>
        </div>
        <div>
          <a href="#">{article.author.username}</a>
          <span>{new Date(article.createdAt).toDateString()}</span>
        </div>
      </ArticleHeader>
      <ArticleBody>
        <div>
          <h3>{article.title}</h3>
        </div>
      </ArticleBody>
    </WrapperArticle>
  );
};

ArticleItem.propTypes = {
  article: PropTypes.node.isRequired,
};

const WrapperArticle = styled.div`
  margin: 20px 0;

  .article__image {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

const ArticleBody = styled.div``;

const ArticleHeader = styled.div`
  display: flex;
`;

export default ArticleItem;
