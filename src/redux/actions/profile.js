import { getCurrentProfile } from '../../services/services';

const fetchProfileRequest = () => ({
  type: 'FETCH_PROFILE_REQUEST',
});

const fetchProfileSuccess = profile => ({
  type: 'FETCH_PROFILE_SUCCESS',
  payload: profile,
});

const resetProfile = () => ({
  type: 'RESET_PROFILE',
});

const getProfile = name => dispatch => {
  localStorage.setItem('ProfileName', name);
  dispatch(fetchProfileRequest());
  getCurrentProfile(name).then(res => {
    const profile = res.data;
    dispatch(fetchProfileSuccess(profile));
  });
};

export { getProfile, resetProfile };
