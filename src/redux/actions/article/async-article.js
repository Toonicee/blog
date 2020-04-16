import {
  getArticles,
  setFavorite,
  setUnfavorite,
  getCurrentArticle,
  createArticle,
  editArticle,
  deleteArticle,
} from '../../../services/services';
import * as actions from './article';

const getAllArticles = page => dispatch => {
  dispatch(actions.fetchArticlesRequest());
  getArticles(page)
    .then(res => {
      const articleData = res.data;
      dispatch(actions.fetchArticlesSuccess(articleData));
    })
    .catch(() => {
      dispatch(actions.fetchArticlesFailure());
    });
};

const getArticle = slug => dispatch => {
  localStorage.setItem('articleSlug', slug);
  dispatch(actions.fetchArticleRequest());
  getCurrentArticle(slug)
    .then(res => {
      const articleData = res.data;
      dispatch(actions.fetchArticleSuccess(articleData));
    })
    .catch(() => {
      dispatch(actions.fetchArticleFailure());
    });
};

const favorite = slug => dispatch => {
  setFavorite(slug)
    .then(res => {
      const articleData = res.data;
      dispatch(actions.articleFavorited(articleData));
    })
    .catch(() => {
      dispatch(actions.articleFavoritedFailure());
    });
};

const unfavorite = slug => dispatch => {
  setUnfavorite(slug)
    .then(res => {
      const articleData = res.data;
      dispatch(actions.articleUnfavorited(articleData));
    })
    .catch(() => {
      dispatch(actions.articleUnfavoritedFailure());
    });
};

const articleCreate = article => dispatch => {
  dispatch(actions.fetchCreateArticleRequest());
  return createArticle(article).then(res => {
    const articleData = res.data;
    dispatch(actions.fetchCreateArticleSuccess(articleData));
    dispatch(actions.resetState());
  });
};
const articleEdit = (slug, values) => dispatch => {
  dispatch(actions.fetchUpdateRequest());
  editArticle(slug, values)
    .then(res => {
      const articleData = res.data;
      dispatch(actions.fetchUpdateSuccess(articleData));
      dispatch(actions.resetState());
    })
    .catch(err => {
      console.log(err);
      dispatch(actions.fetchUpdateFailure());
    });
};

const articleDelete = slug => dispatch => {
  deleteArticle(slug)
    .then(() => {
      dispatch(actions.deleteArticle());
      dispatch(actions.resetState());
    })
    .catch(() => {
      dispatch(actions.deleteArticleFailure());
    });
};

export {
  getAllArticles,
  favorite,
  unfavorite,
  getArticle,
  articleCreate,
  articleEdit,
  articleDelete,
};
