import {
  getArticles,
  deleteItem,
  setFavorite,
  setUnfavorite,
  create,
  getCurrentArticle,
  edit,
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
  setFavorite(slug).then(res => {
    const articleData = res.data;
    dispatch(actions.articleFavorited(articleData));
  });
};

const unfavorite = slug => dispatch => {
  setUnfavorite(slug).then(res => {
    const articleData = res.data;
    dispatch(actions.articleUnfavorited(articleData));
  });
};

const articleCreate = (article, setErrors, setSubmitting) => dispatch => {
  dispatch(actions.fetchCreateArticleRequest());
  create(article)
    .then(res => {
      const articleData = res.data;
      setSubmitting();
      dispatch(actions.fetchCreateArticleSuccess(articleData));
      dispatch(actions.resetState());
    })
    .catch(error => {
      const { errors } = error.response.data;
      dispatch(actions.fetchCreateArticleFailure());
      setErrors(errors);
      setSubmitting();
    });
};
const editArticle = (slug, values) => dispatch => {
  dispatch(actions.fetchUpdateRequest());
  const filteredValues = Object.entries(values).reduce(
    (acc, [field, value]) => (value === '' ? acc : { ...acc, [field]: value }),
    {}
  );
  edit('put', slug, filteredValues)
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

const delArticle = slug => dispatch => {
  deleteItem('delete', slug).then(() => {
    dispatch(actions.deleteArticle());
  });
};

export { getAllArticles, favorite, unfavorite, getArticle, articleCreate, editArticle, delArticle };
