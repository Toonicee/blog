import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CommentItem from '../Comment-item/Comment-item';
import AddComment from '../Add-comment/Add-comment';
import { addNewComment, deleteComment } from '../../redux/actions';

const mapStateToProps = ({ article, auth, comments }) => ({
  slug: article.articleCurrent.slug,
  inProgress: comments.inProgress,
  currentUser: auth.currentUser,
  comments: comments.commentList,
  isAuthorizedUser: auth.isAuthorizedUser,
});

const mapDispatchToProps = {
  addNewCommentConnect: addNewComment,
  deleteCommentConnect: deleteComment,
};

const CommentList = ({
  comments,
  currentUser,
  addNewCommentConnect,
  slug,
  deleteCommentConnect,
  inProgress,
  isAuthorizedUser,
}) => {
  const renderList = (
    <List>
      {comments.map(comment => (
        <li key={comment.id}>
          <CommentItem
            username={currentUser.username}
            deleteComment={deleteCommentConnect}
            comment={comment}
            slug={slug}
            commentId={comment.id}
          />
        </li>
      ))}
    </List>
  );
  return (
    <WrapperComments>
      <AddComment
        inProgress={inProgress}
        isAuthorizedUser={isAuthorizedUser}
        addNewComment={addNewCommentConnect}
        slug={slug}
        currentUser={currentUser}
      />
      {renderList}
    </WrapperComments>
  );
};

CommentList.defaultProps = {
  slug: '',
  isProgress: false,
  isAuthorizedUser: false,
};

CommentList.propTypes = {
  comments: PropTypes.instanceOf(Array).isRequired,
  currentUser: PropTypes.instanceOf(Object).isRequired,
  addNewCommentConnect: PropTypes.func.isRequired,
  deleteCommentConnect: PropTypes.func.isRequired,
  slug: PropTypes.string,
  isProgress: PropTypes.bool,
  isAuthorizedUser: PropTypes.bool,
};

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const WrapperComments = styled.div`
  width: 700px;
  max-width: 100%;
  margin: 30px 0;
`;

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
