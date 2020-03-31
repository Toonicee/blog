import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ArticleItem = ({ article }) => {
  const renderTagLIst = (
    <div>
      <ul className="article__tag-list">
        {article.tagList.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  );

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
        <div className="article__meta">
          <a href="#">{article.author.username}</a>
          <span>{new Date(article.createdAt).toDateString()}</span>
        </div>
      </ArticleHeader>
      <ArticleBody>
        <div>
          <h3 className="article__title">{article.title}</h3>
          <span>{article.favoritesCount}</span>
        </div>
        {article.tagList.length === 0 ? null : renderTagLIst}
      </ArticleBody>
    </WrapperArticle>
  );
};

ArticleItem.propTypes = {
  article: PropTypes.node.isRequired,
};

const WrapperArticle = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  max-width: 700px;
  width: 100%;
  padding: 35px 10px;
  margin: 0 auto;
`;

const ArticleBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  .article__title {
    font-size: 25px;
    line-height: 1.04;
  }

  .article__tag-list {
    display: flex;
    list-style: none;
    padding: 0;
    opacity: 0.7;
    font-size: 12px;
    text-transform: uppercase;

    li {
      margin-left: 10px;
    }
  }
`;

const ArticleHeader = styled.div`
  display: flex;
  .article__image {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }

  .article__meta {
    display: flex;
    flex-direction: column;
  }
`;

export default ArticleItem;
