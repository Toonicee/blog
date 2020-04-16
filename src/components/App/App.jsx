import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Home, Auth, CreatePost, Profile, Article, EditArticle } from '../../pages';
import { setUserData } from '../../redux/actions';

import 'normalize.css';
import 'antd/dist/antd.css';

const mapDispatchToProps = {
  setUserDataConnect: setUserData,
};

class App extends React.Component {
  componentDidMount() {
    const { setUserDataConnect } = this.props;
    setUserDataConnect();
  }

  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path={['/login', '/signup']} component={Auth} />
          <Route path="/add" component={CreatePost} />
          <Route exact path="/:username" component={Profile} />
          <Route exact path="/articles/:slug" component={Article} />
          <Route path="/articles/:slug/edit" component={EditArticle} />
        </Switch>
      </>
    );
  }
}

App.propTypes = {
  setUserDataConnect: PropTypes.func.isRequired,
};

export default connect(() => ({}), mapDispatchToProps)(App);
