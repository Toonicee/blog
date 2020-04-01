const inicialState = {
  isLoading: true,
};

const userProfile = (state = inicialState, action) => {
  switch (action.type) {
    case 'PROFILE_LOADING':
      return {
        ...state,
        profile: action.payload.profile,
        isLoading: false,
      };
    case 'PROFILE_NAME':
      return {
        ...state,
        profileName: action.payload,
      };
    case 'RESET_PROFILE':
      return {
        ...state,
        profile: {},
        isLoading: true,
      };
    default:
      return state;
  }
};

export default userProfile;
