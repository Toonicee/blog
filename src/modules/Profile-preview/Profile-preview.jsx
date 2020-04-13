import React from 'react';

import { Loading } from '../../components';

const ProfilePreview = ({ profile, isLoading }) => {
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div>
        <img alt={profile.username} width="128" height="128" src={profile.image} />
      </div>
      <div>
        <h1>{profile.username}</h1>
        <div>
          <span>Редактировать профиль</span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePreview;
