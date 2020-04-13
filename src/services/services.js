import axios from 'axios';

axios.defaults.baseURL = 'https://conduit.productionready.io/api/';
class BlogApi {
  setToken = token => {
    if (token) {
      axios.defaults.headers.common.Authorization = `Token ${token}`;
    }
  };

  getArticles = (page = 0, limit = 10) =>
    axios.get('/articles', {
      params: {
        limit,
        offset: page * 10,
      },
    });

  Auth = {
    current: () => axios.get('/user'),
    register: body => axios.post('/users', body),
    login: body => axios.post('/users/login', body),
  };

  Article = {
    del: slug => axios.delete(`/articles/${slug}`),
    favorite: slug => axios.post(`/articles/${slug}/favorite`),
    unfavorite: slug => axios.delete(`/articles/${slug}/favorite`),
    create: article => axios.post('/articles', { article }),
    edit: (slug, value) => axios.put(`/articles/${slug}`, { article: value }),
  };

  currentArticle = (requestMethod, slug, body = {}) => {
    return axios({
      method: requestMethod,
      url: `/articles/${slug}`,
      data: body,
    });
  };

  Profile = {
    follow: username => axios.post(`/profiles/${username}/follow`),
    get: username => axios.get(`/profiles/${username}`),
    unfollow: username => axios.delete(`/profiles/${username}/follow`),
  };

  Comment = {
    get: slug => axios.get(`/articles/${slug}/comments`),
    post: (slug, comment) => axios.post(`/articles/${slug}/comments`, comment),
    delete: (slug, id) => axios.delete(`/articles/${slug}/comments/${id}`),
  };
}

export default new BlogApi();
