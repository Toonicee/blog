import React from 'react';
import { connect } from 'react-redux';

import { Header, ProfilePreview } from '../../modules';
import { getProfile, resetProfile } from '../../redux/actions/profile';

const mapStateToProps = ({ userProfile }) => ({
  profile: userProfile.profile,
  profileName: userProfile.profileName,
  isLoading: userProfile.isLoading,
});

const mapDispatchToProps = {
  getProfile,
  resetProfile,
};

class Profile extends React.Component {
  componentDidMount() {
    const { getProfile, profileName } = this.props;
    getProfile(profileName);
  }

  componentWillUnmount() {
    const { resetProfile } = this.props;
    resetProfile();
  }

  render() {
    const { profile, isLoading } = this.props;
    console.log(isLoading);
    const renderProf = isLoading ? <h1>Загрузка</h1> : <ProfilePreview />;
    return (
      <>
        <Header />
        {renderProf}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
