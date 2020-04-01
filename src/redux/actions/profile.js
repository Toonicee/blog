import servisec from '../../servisec/servisec';

const profileLoading = profile => ({
  type: 'PROFILE_LOADING',
  payload: profile,
});

const profileName = name => ({
  type: 'PROFILE_NAME',
  payload: name,
});

const resetProfile = () => ({
  type: 'RESET_PROFILE',
});
const getProfile = name => dispatch => {
  servisec.Profile.get(name).then(res => {
    const profile = res.data;
    dispatch(profileLoading(profile));
  });
};

export { getProfile, profileName, resetProfile };
