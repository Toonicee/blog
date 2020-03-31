const initialState = {
  currentUser: {},
  error: null,
  isAutoUser: null,
  isSuccess: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
    case 'REGISTER':
      return {
        ...state,
        currentUser: action.payload.user,
        isAutoUser: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        currentUser: {},
        isAutoUser: false,
      };
    case 'SET_USER_DATA_SUCCESS':
      return {
        ...state,
        isAutoUser: true,
        currentUser: action.payload.user,
      };
    case 'SET_USER_DATA_FAILURE':
      return {
        ...state,
        isAutoUser: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default auth;
