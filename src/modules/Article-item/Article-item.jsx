import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Skeleton, Switch, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

import { FavoritesCount, DateCreation, TagList, ProfileLink } from '../../components';

const ArticleItem = ({ article, isProgress }) => {
  const setArticleSlug = () => {
    localStorage.setItem('articleSlug', article.slug);
  };

  return (
    <>
      <Card style={{ width: 700, marginTop: 16 }} loading={isProgress}>
        <Card.Meta
          avatar={
            <ProfileLink username={article.author.username}>
              <Avatar src={article.author.image} />
            </ProfileLink>
          }
          title={
            <Link onClick={setArticleSlug} to={`/articles/${article.slug}`}>
              <div>
                <h3 className="article__title">{article.title}</h3>
              </div>
            </Link>
          }
          description={article.description}
        />
        <div>
          <ArticleHeader>
            <TagList tags={article.tagList} />
          </ArticleHeader>
          <ArticleBody>
            <Inner>
              <DateCreation date={article.createdAt} />

              <FavoritesCount
                favorited={article.favorited}
                count={article.favoritesCount}
                slug={article.slug}
              />
            </Inner>
            <div>
              <Link
                className="article__link"
                onClick={setArticleSlug}
                to={`/articles/${article.slug}`}
              >
                Читать далее…
              </Link>
            </div>
          </ArticleBody>
        </div>
      </Card>
    </>
  );
};

ArticleItem.propTypes = {
  article: PropTypes.instanceOf(Object).isRequired,
};

const ArticleBody = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  p {
    margin: 0;
  }
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

  .article__link {
    color: rgba(0, 0, 0, 0.54);
    font-size: 12px;
    &:hover {
      color: rgba(0, 0, 0, 0.9);
    }
  }
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ArticleHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
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
