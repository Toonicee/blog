const inicialState = {
  articles: [],
  isProgres: false,
};

const article = (state = inicialState, action) => {
  switch (action.type) {
    case 'ARTICLE_SUCCESS': {
      return {
        ...state,
        articles: action.payload.articles,
        articlesCount: action.payload.articlesCount,
      };
    }
    case 'SET_PAGE':
      console.log(action);
      return {
        ...state,
        currentPage: action.payload,
      };
    case 'DOWNLOAD_PROGRESS':
      return {
        ...state,
        isProgres: true,
      };
    default:
      return state;
  }
};

export default article;
