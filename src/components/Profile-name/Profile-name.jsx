import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileName = ({ username, children }) => {
  const setUserName = () => {
    localStorage.setItem('ProfileName', username);
  };
  return (
    <Link onClick={setUserName} to={`/${username}`}>
      {children}
    </Link>
  );
};

ProfileName.defaultProps = {
  username: '',
  children: null,
};

ProfileName.propTypes = {
  username: PropTypes.string,
  children: PropTypes.node,
};

export default ProfileName;
