import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ userProfile }) => {
  return {
    profile: userProfile.profile,
  };
};

const ProfilePreview = ({ profile }) => {
  return (
    <div>
      <img src={profile.image} alt="" />
      <div>{profile.username}</div>
      <div>dssdsdsdsds</div>
    </div>
  );
};

export default connect(mapStateToProps)(ProfilePreview);
