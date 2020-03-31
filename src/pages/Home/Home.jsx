import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Header, Article } from '../../modules';

const mapStateToProps = state => ({
  isAutoUser: state.auth.isAutoUser,
  isProgres: state.article.isProgres,
});

const Home = ({ isAutoUser, isProgres }) => {
  console.log(isProgres);
  if (!isAutoUser) return <Redirect to="/login" />;
  return (
    <>
      <Header />
      {isProgres ? <Article /> : <div>Загрузка</div>}
    </>
  );
};

export default connect(mapStateToProps)(Home);
