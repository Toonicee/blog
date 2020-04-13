import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';

const LinkHomePage = () => {
  const { pathname } = useLocation();
  if (pathname === '/') {
    return null;
  }

  return (
    <div>
      <Link to="/">
        <HomeOutlined />
        Главная
      </Link>
    </div>
  );
};

export default LinkHomePage;
