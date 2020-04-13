import blogApi from '../../../services/services';
import * as actions from './article';

const getAllArticles = page => dispatch => {
  dispatch(actions.fetchArticlesRequest());
  blogApi
    .getArticles(page)
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
  blogApi
    .currentArticle('get', slug)
    .then(res => {
      const articleData = res.data;
      dispatch(actions.fetchArticleSuccess(articleData));
    })
    .catch(() => {
      dispatch(actions.fetchArticleFailure());
    });
};

const favorite = slug => dispatch => {
  blogApi.Article.favorite(slug).then(res => {
    const articleData = res.data;
    dispatch(actions.articleFavorited(articleData));
  });
};

const unfavorite = slug => dispatch => {
  blogApi.Article.unfavorite(slug).then(res => {
    const articleData = res.data;
    dispatch(actions.articleUnfavorited(articleData));
  });
};

const articleCreate = (article, setErrors, setSubmitting) => dispatch => {
  dispatch(actions.fetchCreateArticleRequest());
  blogApi.Article.create(article)
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
  blogApi
    .currentArticle('put', slug, filteredValues)
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
  blogApi.currentArticle('delete', slug).then(() => {
    dispatch(actions.deleteArticle());
  });
};

export { getAllArticles, favorite, unfavorite, getArticle, articleCreate, editArticle, delArticle };
