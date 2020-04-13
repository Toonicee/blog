import axios from 'axios';

axios.defaults.baseURL = 'https://conduit.productionready.io/api/';
export const setToken = token => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Token ${token}`;
  }
};

// API articles
export const getArticles = (page = 0, limit = 10) =>
  axios.get('/articles', {
    params: {
      limit,
      offset: page * 10,
    },
  });
export const deleteItem = slug => axios.delete(`/articles/${slug}`);
export const getCurrentArticle = slug => axios.get(`/articles/${slug}`);
export const setFavorite = slug => axios.post(`/articles/${slug}/favorite`);
export const setUnfavorite = slug => axios.delete(`/articles/${slug}/favorite`);
export const create = article => axios.post('/articles', { article });
export const edit = (slug, value) => axios.put(`/articles/${slug}`, { article: value });

// API registration and authorization
export const getCurrentUser = () => axios.get('/user');
export const register = body => axios.post('/users', body);
export const login = body => axios.post('/users/login', body);

// API profile
export const follow = username => axios.post(`/profiles/${username}/follow`);
export const getCurrentProfile = username => axios.get(`/profiles/${username}`);
export const unfollow = username => axios.delete(`/profiles/${username}/follow`);

// API comments
export const getAll = slug => axios.get(`/articles/${slug}/comments`);
export const postComment = (slug, comment) => axios.post(`/articles/${slug}/comments`, comment);
export const delComment = (slug, id) => axios.delete(`/articles/${slug}/comments/${id}`);
