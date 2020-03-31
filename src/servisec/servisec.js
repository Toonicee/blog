import axios from 'axios';

axios.defaults.baseURL = 'https://conduit.productionready.io/api/';

const getToken = token => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Token ${token}`;
  }
};

const Auth = {
  current: () => axios.get('/user'),
  register: body => axios.post('/users', body),
  login: body => axios.post('/users/login', body),
};

const limit = (count, p = 0) => `limit=${count}&offset=${p ? p * count : 0}`;
const Article = {
  getAll: page => axios.get(`/articles?${limit(10, page)}`),
};

export default {
  Article,
  Auth,
  getToken,
};
