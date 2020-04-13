import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileLink = ({ username, children }) => {
  const setUserName = () => {
    localStorage.setItem('ProfileName', username);
  };
  return (
    <Link onClick={setUserName} to={`/${username}`}>
      {children}
    </Link>
  );
};

ProfileLink.defaultProps = {
  username: '',
  children: null,
};

ProfileLink.propTypes = {
  username: PropTypes.string,
  children: PropTypes.node,
};

export default ProfileLink;
