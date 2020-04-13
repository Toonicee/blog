const inicialState = {
  isLoading: false,
  profile: {},
};

const userProfile = (state = inicialState, action) => {
  switch (action.type) {
    case 'FETCH_PROFILE_REQUEST':
      return {
        ...state,
        isLoading: true,
      };
    case 'FETCH_PROFILE_SUCCESS':
      return {
        ...state,
        profile: action.payload.profile,
        isLoading: false,
      };
    case 'RESET_PROFILE':
      return {
        ...inicialState,
      };
    default:
      return state;
  }
};

export default userProfile;
