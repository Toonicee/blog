import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AddPost = () => {
  const { pathname } = useLocation();
  if (pathname === '/add') {
    return null;
  }
  return <Link to="/add">Добавить новый пост</Link>;
};

export default AddPost;
