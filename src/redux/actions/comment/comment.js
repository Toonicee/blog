import { createAction } from 'redux-actions';

// get comments from an Article
export const fetchCommentsRequest = createAction('FETCH_COMMENTS_REQUEST');
export const fetchCommentsSuccess = createAction('FETCH_COMMENTS_SUCCESS');
export const fetchCommentsFailure = createAction('FETCH_COMMENTS_FAILURE');

// delete comment
export const fetchCommentDeleteRequest = createAction('FETCH_COMMENTS_DELETE_REQUEST');
export const fetchCommentDeleteSuccess = createAction('FETCH_COMMENTS_DELETE_SUCCESS');
export const fetchCommentDeleteFailure = createAction('FETCH_COMMENTS_DELETE_FAILURE');

// add comments to an article
export const fetchAddCommentsRequest = createAction('FETCH_ADD_COMMENTS_REQUEST');
export const fetchAddCommentsSuccess = createAction('FETCH_ADD_COMMENTS_SUCCESS');
export const fetchAddCommentsFailure = createAction('FETCH_ADD_COMMENTS_FAILURE');
