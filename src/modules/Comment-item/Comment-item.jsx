import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import PropTypes from 'prop-types';

import { DateCreation, ProfileName } from '../../components';

const CommentItem = ({ comment, commentId, slug, deleteComment, username }) => {
  const canModify = username === comment.author.username;
  return (
    <Comment>
      <CommentHeader>
        <div className="comment__inner">
          <ProfileName username={comment.author.username}>
            <img
              className="comment__author-img"
              src={comment.author.image}
              alt={comment.author.username}
              width="30"
              height="30"
            />
          </ProfileName>
          <ProfileName username={comment.author.username}>
            <span className="comment__author-img">{comment.author.username}</span>
          </ProfileName>
          <div className="comment__date">
            <DateCreation date={comment.createdAt} />
          </div>
        </div>
        {canModify ? (
          <div>
            <button
              onClick={() => deleteComment(slug, commentId)}
              className="comment__btn-delete"
              type="button"
            >
              <Icon className="comment__icon-delete" type="delete" />
            </button>
          </div>
        ) : null}
      </CommentHeader>
      <CommentBody>{comment.body}</CommentBody>
    </Comment>
  );
};

CommentItem.defaultProps = {
  commentId: 0,
  slug: '',
  username: '',
};

CommentItem.propTypes = {
  comment: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
  commentId: PropTypes.number,
  slug: PropTypes.string,
  deleteComment: PropTypes.func.isRequired,
  username: PropTypes.string,
};

const Comment = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  margin-bottom: 20px;
`;
const CommentHeader = styled.div`
  background: #eee;
  padding: 10px 10px 5px 10px;
  display: flex;
  justify-content: space-between;
  .comment__author-img {
    border-radius: 50%;
    margin-right: 10px;
  }

  .comment__btn-delete {
    border: none;
    cursor: pointer;
    padding: 1px 4px;
    background: inherit;
    color: #b85c5c;

    &:hover {
      color: #c72424;
    }
    &:focus {
      color: #c72424;
    }
    &:active {
      color: #c72424;
    }
  }

  .comment__inner {
    display: flex;
    align-items: baseline;
  }

  .comment__date {
    margin-left: 15px;
    font-size: 10px;
  }
`;

const CommentBody = styled.div`
  padding: 20px;
`;

export default CommentItem;
