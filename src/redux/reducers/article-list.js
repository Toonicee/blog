import { handleActions } from 'redux-actions';

const initialState = {
  articles: [],
  isProgress: false,
};

const like = (articles, payload) =>
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
        isProgress: false,
      };
    },
    FETCH_ARTICLES_FAILURE: state => {
      return {
        ...state,
        isProgress: false,
      };
    },
    ARTICLE_FAVORITED: (state, { payload }) => {
      console.log(state);
      return {
        ...state,
        articles: like(state.articles, payload),
      };
    },
    ARTICLE_UNFAVORITED: (state, { payload }) => {
      return {
        ...state,
        articles: like(state.articles, payload),
      };
    },
  },
  initialState
);

export default articles;
