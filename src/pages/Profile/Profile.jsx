import React from 'react';
import { connect } from 'react-redux';

import { Header, ProfilePreview } from '../../modules';
import { Container } from '../../components';
import { getProfile, resetProfile } from '../../redux/actions/profile';

const mapStateToProps = ({ userProfile }) => ({
  profile: userProfile.profile,
  isLoading: userProfile.isLoading,
});

const mapDispatchToProps = {
  getProfile,
  resetProfile,
};

class Profile extends React.Component {
  componentDidMount() {
    const { getProfile } = this.props;
    const profileName = localStorage.getItem('ProfileName');
    getProfile(profileName);
  }

  componentWillUnmount() {
    const { resetProfile } = this.props;
    resetProfile();
  }

  render() {
    const { profile, isLoading } = this.props;
    return (
      <>
        <Header />
        <Container>
          <ProfilePreview profile={profile} isLoading={isLoading} />
        </Container>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
