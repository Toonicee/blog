import blogApi from '../../../services/services';
import * as actions from './comment';

export const getAllComments = slug => dispatch => {
  dispatch(actions.fetchCommentsRequest());
  blogApi.Comment.get(slug)
    .then(res => {
      const articleData = res.data;
      dispatch(actions.fetchCommentsSuccess(articleData));
    })
    .catch(() => {
      dispatch(actions.fetchCommentsFailure());
    });
};

export const deleteComment = (slug, id) => dispatch => {
  dispatch(actions.fetchCommentDeleteRequest());
  blogApi.Comment.delete(slug, id).then(() => {
    dispatch(actions.fetchCommentDeleteSuccess(id));
  });
};

export const addNewComment = (slug, value) => dispatch => {
  dispatch(actions.fetchAddCommentsRequest());
  blogApi.Comment.post(slug, {
    comment: {
      body: value,
    },
  }).then(res => {
    const { comment } = res.data;
    dispatch(actions.fetchAddCommentsSuccess(comment));
  });
};
