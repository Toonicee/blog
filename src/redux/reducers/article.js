import { handleActions } from 'redux-actions';

const initialState = {
  isProgress: false,
  articleState: '',
  error: false,
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
        error: true,
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
        articleState: 'create',
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
        articleState: 'update',
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
        articleCurrent: payload.article,
      };
    },
    ARTICLE_FAVORITED_FAILURE: state => {
      return {
        ...state,
        error: true,
      };
    },
    ARTICLE_UNFAVORITED: (state, { payload }) => {
      return {
        ...state,
        articleCurrent: payload.article,
      };
    },
    ARTICLE_UNFAVORITED_FAILURE: state => {
      return {
        ...state,
        error: true,
      };
    },
    DELETE_ARTICLE: () => {
      return {
        ...initialState,
        articleState: 'delete',
      };
    },
    DELETE_ARTICLE_FAILURE: state => {
      return {
        ...state,
        error: true,
      };
    },
    RESET_STATE: state => {
      return {
        ...state,
        articleState: '',
      };
    },
  },
  initialState
);

export default article;
