import { handleActions } from 'redux-actions';

const initialState = {
  articles: [],
  error: false,
  isProgress: false,
};

const setValueArticle = (articles, payload) =>
  articles.map(article => {
    if (article.slug === payload.article.slug) {
      return {
        ...article,
        favorited: payload.article.favorited,
        favoritesCount: payload.article.favoritesCount,
      };
    }
    return article;
  });

const articles = handleActions(
  {
    FETCH_ARTICLES_REQUEST: state => {
      return {
        ...state,
        isProgress: true,
      };
    },
    FETCH_ARTICLES_SUCCESS: (state, { payload }) => {
      return {
        ...state,
        articles: payload.articles,
        articlesCount: payload.articlesCount,
        currentPage: payload.page,
        isProgress: false,
      };
    },
    FETCH_ARTICLES_FAILURE: state => {
      return {
        ...state,
        isProgress: false,
        error: true,
      };
    },
    ARTICLE_FAVORITED: (state, { payload }) => {
      return {
        ...state,
        articles: setValueArticle(state.articles, payload),
      };
    },
    ARTICLE_UNFAVORITED: (state, { payload }) => {
      return {
        ...state,
        articles: setValueArticle(state.articles, payload),
      };
    },
  },
  initialState
);

export default articles;
