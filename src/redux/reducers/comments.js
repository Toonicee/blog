import { handleActions } from 'redux-actions';

const initialState = {
  commentList: [],
  isProgress: false,
};

const comments = handleActions(
  {
    FETCH_COMMENTS_REQUEST: state => {
      return {
        ...state,
        isProgress: true,
      };
    },
    FETCH_COMMENTS_SUCCESS: (state, { payload }) => {
      return {
        ...state,
        isProgress: false,
        commentList: payload.comments,
      };
    },
    FETCH_ADD_COMMENTS_SUCCESS: (state, { payload }) => {
      return {
        ...state,
        commentList: [payload, ...state.commentList],
      };
    },
    FETCH_COMMENTS_DELETE_SUCCESS: (state, { payload }) => {
      return {
        ...state,
        commentList: state.commentList.filter(({ id }) => id !== payload),
      };
    },
  },
  initialState
);

export default comments;
