import servisec from '../../servisec/servisec';

const articleSuccess = body => ({
  type: 'ARTICLE_SUCCESS',
  payload: body,
});
const downloadProgress = progress => {
  return {
    type: 'DOWNLOAD_PROGRESS',
    payload: progress,
  };
};

const setPage = page => ({
  type: 'SET_PAGE',
  payload: page,
});

const articleLoaded = page => dispatch => {
  servisec.Article.getAll(page).then(res => {
    const articleData = res.data;
    dispatch(articleSuccess(articleData));
    dispatch(downloadProgress(true));
  });
};

export { articleLoaded, setPage, downloadProgress };
