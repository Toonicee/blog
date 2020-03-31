import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Home, Auth, CreatePost } from '../../pages';
import servisec from '../../servisec/servisec';
import { setUserData } from '../../redux/actions/auth';
import { articleLoaded } from '../../redux/actions/article';

import 'normalize.css';
import 'antd/dist/antd.css';

const mapStateToProps = state => {
  return {
    isAutoUser: state.auth.isAutoUser,
    articles: state.article.articles,
    currentPage: state.article.currentPage,
  };
};

const mapDispatchToProps = {
  getAllArticle: articleLoaded,
  onLoad: setUserData,
};

class App extends React.Component {
  componentDidMount() {
    const { getAllArticle, onLoad, currentPage } = this.props;
    const token = window.localStorage.getItem('jwt');
    if (token) {
      servisec.getToken(token);
    }
    getAllArticle(currentPage);
    onLoad();
  }

  render() {
    return (
      <>
        <Switch>
          <Route exact path={['/', '/home']} component={Home} />
          <Route path={['/login', '/signup']} component={Auth} />
          <Route path="/add" component={CreatePost} />
        </Switch>
      </>
    );
  }
}

App.defaultProps = {
  currentPage: 0,
};

App.propTypes = {
  getAllArticle: PropTypes.func.isRequired,
  onLoad: PropTypes.func.isRequired,
  currentPage: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
