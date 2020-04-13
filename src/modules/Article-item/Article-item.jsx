import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FavoritesCount, DateCreation, TagList, ProfileName } from '../../components';

const ArticleItem = ({ article }) => {
  const setArticleSlug = () => {
    localStorage.setItem('articleSlug', article.slug);
  };

  return (
    <InnerArticle>
      <ArticleHeader>
        <div className="article__author">
          <span className="article__desc">Автор:</span>
          <ProfileName username={article.author.username}>{article.author.username}</ProfileName>
        </div>
        <DateCreation date={article.createdAt} />
      </ArticleHeader>
      <ArticleBody>
        <Link onClick={setArticleSlug} to={`/articles/${article.slug}`}>
          <div>
            <h3 className="article__title">{article.title}</h3>
          </div>
        </Link>
        <TagList tags={article.tagList} />
        <FavoritesCount
          favorited={article.favorited}
          count={article.favoritesCount}
          slug={article.slug}
        />
      </ArticleBody>
    </InnerArticle>
  );
};

ArticleItem.propTypes = {
  article: PropTypes.instanceOf(Object).isRequired,
};

const InnerArticle = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.05);
  background: #fff;
  margin-bottom: 20px;
  padding: 25px 15px;
`;

const ArticleBody = styled.div`
  .article__title {
    color: #333;
    font-weight: 500;
    font-size: 28px;
    line-height: 36.4px;

    &:hover {
      color: #548eaa;
    }
    &:active {
      color: #5790ac;
    }
  }
`;

const ArticleHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .article__author {
    color: #548eaa;
    font-weight: 500;
    font-size: 14px;
    text-decoration: none;
    margin: 0 15px 0 0;
  }
  .article__desc {
    margin-right: 10px;
  }
  p {
    margin: 0;
    font-weight: 700;
    font-size: 12px;
    opacity: 0.7;
  }
`;

export default ArticleItem;
