import { createAction } from 'redux-actions';

// аctions getting all the articles
export const fetchArticlesRequest = createAction('FETCH_ARTICLES_REQUEST');
export const fetchArticlesSuccess = createAction('FETCH_ARTICLES_SUCCESS');
export const fetchArticlesFailure = createAction('FETCH_ARTICLES_FAILURE');

// actions to get the current article
export const fetchArticleRequest = createAction('FETCH_ARTICLE_REQUEST');
export const fetchArticleSuccess = createAction('FETCH_ARTICLE_SUCCESS');
export const fetchArticleFailure = createAction('FETCH_ARTICLE_FAILURE');

// action article creation
export const fetchCreateArticleRequest = createAction('FETCH_CREATE_ARTICLE_REQUEST');
export const fetchCreateArticleSuccess = createAction('FETCH_CREATE_ARTICLE_SUCCESS');
export const fetchCreateArticleFailure = createAction('FETCH_CREATE_ARTICLE_FAILURE');

// action article update
export const fetchUpdateRequest = createAction('FETCH_UPDATE_REQUEST');
export const fetchUpdateSuccess = createAction('FETCH_UPDATE_SUCCESS');
export const fetchUpdateFailure = createAction('FETCH_UPDATE_FAILURE');

// action like dislike
export const articleFavorited = createAction('ARTICLE_FAVORITED');
export const articleUnfavorited = createAction('ARTICLE_UNFAVORITED');

export const deleteArticle = createAction('DELETE_ARTICLE');

export const resetState = createAction('RESET_STATE');
