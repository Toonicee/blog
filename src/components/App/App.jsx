import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Home, Auth, CreatePost, Profile, Article, EditArticle } from '../../pages';
import { setUserData } from '../../redux/actions';
import Loading from '../Loading';

import 'normalize.css';
import 'antd/dist/antd.css';

const mapStateToProps = ({ auth }) => {
  return {
    isAuthorizedUser: auth.isAuthorizedUser,
    inProgress: auth.inProgress,
  };
};

const mapDispatchToProps = {
  setUserDataConnect: setUserData,
};

class App extends React.Component {
  componentDidMount() {
    const { setUserDataConnect } = this.props;
    setUserDataConnect();
  }

  render() {
    const { inProgress } = this.props;
    if (inProgress) {
      return <Loading />;
    }

    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path={['/login', '/signup']} component={Auth} />
          <Route path="/add" component={CreatePost} />
          <Route exact path="/:username" component={Profile} />
          <Route exact path="/articles/:slug" render={() => <Article />} />
          <Route path="/articles/:slug/edit" component={EditArticle} />
        </Switch>
      </>
    );
  }
}

App.propTypes = {
  setUserDataConnect: PropTypes.func.isRequired,
  inProgress: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
