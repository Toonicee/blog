import React from 'react';
import styled from 'styled-components';
import { Icon, Comment, Avatar } from 'antd';
import PropTypes from 'prop-types';

import { DateCreation, ProfileLink } from '../../components';

const CommentItem = ({ comment, commentId, slug, deleteComment, username }) => {
  const canModify = username === comment.author.username;
  return (
    <Wrapper>
      <Comment
        author={
          <ProfileLink username={comment.author.username}>
            <span className="comment__author-img">{comment.author.username}</span>
          </ProfileLink>
        }
        avatar={
          <ProfileLink username={comment.author.username}>
            <Avatar src={comment.author.image} alt={comment.author.username} />
          </ProfileLink>
        }
        content={<p>{comment.body}</p>}
        datetime={<DateCreation date={comment.createdAt} />}
      />
      {canModify ? (
        <CommentHeader>
          <button
            onClick={() => deleteComment(slug, commentId)}
            className="comment__btn-delete"
            type="button"
          >
            <Icon className="comment__icon-delete" type="delete" />
          </button>
        </CommentHeader>
      ) : null}
    </Wrapper>
  );
};

CommentItem.defaultProps = {
  commentId: 0,
  slug: '',
  username: '',
};

CommentItem.propTypes = {
  comment: PropTypes.instanceOf(Object).isRequired,
  commentId: PropTypes.number,
  slug: PropTypes.string,
  deleteComment: PropTypes.func.isRequired,
  username: PropTypes.string,
};

const Wrapper = styled.div`
  position: relative;
`;
const CommentHeader = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
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
`;

export default CommentItem;
