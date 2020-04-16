import React from 'react';
import styled from 'styled-components';
// import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  Loading,
  FavoritesCount,
  EditSection,
  DateCreation,
  TagList,
  ProfileLink,
} from '../../components';

const ArticlePreview = ({ article, isProgress, username }) => {
  if (isProgress) {
    return <Loading />;
  }
  const canModify = username === article.author.username;
  return (
    <Article>
      <ArticleHeader>
        <div className="article__profile-info">
          <div className="article__inner">
            <ProfileLink username={article.author.username}>
              <img
                className="article__profile-img"
                src={article.author.image}
                alt={article.author.username}
                width="40"
                height="40"
              />
            </ProfileLink>
            <div>
              <ProfileLink username={article.author.username}>
                {article.author.username}
              </ProfileLink>
              <div>
                <DateCreation date={article.createdAt} />
              </div>
            </div>
          </div>
          <span>{article.author.bio}</span>
        </div>
        {canModify && <EditSection slug={article.slug} />}
      </ArticleHeader>
      <ArticleBody>
        <h3 className="article__title">{article.title}</h3>
        <TagList tags={article.tagList} />
        <p>{article.body}</p>
        <div>{article.description}</div>
        <div>
          <FavoritesCount
            count={article.favoritesCount}
            slug={article.slug}
            favorited={article.favorited}
          />
        </div>
      </ArticleBody>
    </Article>
  );
};

ArticlePreview.defaultProps = {
  isProgress: false,
  username: '',
};

ArticlePreview.propTypes = {
  article: PropTypes.instanceOf(Object).isRequired,
  isProgress: PropTypes.bool,
  username: PropTypes.string,
};

const ArticleHeader = styled.div`
  padding: 25px;
  background: #eee;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  .article__profile-img {
    border-radius: 50%;
    margin-right: 20px;
  }

  .article__profile-link {
    font-size: 14px;
  }
  .article__inner {
    display: flex;
  }
`;

const Article = styled.div`
  border-top: 2px solid #d5dddf;
  border-bottom: 2px solid #d5dddf;
  color: #343434;
  width: 900px;
  padding: 30px 0;
  max-width: 100%;
`;
const ArticleBody = styled.div`
  .article__title {
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;
  }
`;
export default ArticlePreview;
