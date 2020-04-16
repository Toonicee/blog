import { handleActions } from 'redux-actions';

const initialState = {
  commentList: [],
  error: true,
  inProgress: false,
};

const comments = handleActions(
  {
    FETCH_COMMENTS_REQUEST: state => {
      return {
        ...state,
        inProgress: true,
      };
    },
    FETCH_COMMENTS_SUCCESS: (state, { payload }) => {
      return {
        ...state,
        inProgress: false,
        commentList: payload.comments,
      };
    },
    FETCH_ADD_COMMENTS_REQUEST: state => {
      return {
        ...state,
        inProgress: true,
      };
    },
    FETCH_ADD_COMMENTS_SUCCESS: (state, { payload }) => {
      return {
        ...state,
        commentList: [payload, ...state.commentList],
        inProgress: false,
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
