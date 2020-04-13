import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserName = ({ profileName, username }) => {
  const getProfile = () => {
    localStorage.setItem('ProfileName', username);

    profileName(username);
  };

  return (
    <div>
      <h2>
        <Link onClick={getProfile} to={`/${username}`}>
          {username}
        </Link>
      </h2>
    </div>
  );
};

UserName.defaultProps = {
  username: '',
};

UserName.propTypes = {
  username: PropTypes.string,
  profileName: PropTypes.func.isRequired,
};

export default UserName;
