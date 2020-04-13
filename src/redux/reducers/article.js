import { handleActions } from 'redux-actions';

const initialState = {
  isProgress: false,
  isSuccess: null,
  articleCurrent: {
    author: {},
  },
};
const article = handleActions(
  {
    FETCH_ARTICLE_REQUEST: state => {
      return {
        ...state,
        isProgress: true,
      };
    },
    FETCH_ARTICLE_SUCCESS: (state, { payload }) => {
      return {
        ...state,
        articleCurrent: payload.article,
        isProgress: false,
      };
    },

    FETCH_ARTICLE_FAILURE: state => {
      return {
        ...state,
        isProgress: false,
      };
    },
    FETCH_CREATE_ARTICLE_REQUEST: state => {
      return {
        ...state,
        isProgress: true,
      };
    },
    FETCH_CREATE_ARTICLE_SUCCESS: (state, { payload }) => {
      return {
        ...state,
        articleCurrent: payload.article,
        isProgress: false,
        articleState: 'created',
      };
    },
    FETCH_CREATE_ARTICLE_FAILURE: state => {
      return {
        ...state,
        isProgress: false,
        error: true,
      };
    },
    FETCH_UPDATE_REQUEST: state => {
      return {
        ...state,
        isProgress: true,
      };
    },
    FETCH_UPDATE_SUCCESS: (state, { payload }) => {
      return {
        ...state,
        articleCurrent: payload.article,
        isProgress: false,
        articleState: 'edited',
      };
    },
    FETCH_UPDATE_FAILURE: state => {
      return {
        ...state,
        isProgress: false,
        error: true,
      };
    },
    ARTICLE_FAVORITED: (state, { payload }) => {
      return {
        ...state,
        articleCurrent: {
          ...payload.article,
          favorited: payload.article.favorited,
          favoritesCount: payload.article.favoritesCount,
        },
      };
    },
    ARTICLE_UNFAVORITED: (state, { payload }) => {
      return {
        ...state,
        articleCurrent: {
          ...payload.article,
          favorited: payload.article.favorited,
          favoritesCount: payload.article.favoritesCount,
        },
      };
    },
    DELETE_ARTICLE: () => {
      return {
        ...initialState,
        articleState: 'deleted',
      };
    },
    RESET_STATE: () => {
      return initialState;
    },
  },
  initialState
);

export default article;
