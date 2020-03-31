import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import servisec from '../servisec/servisec';

import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const localStorageMiddleware = () => next => action => {
  if (action.type === 'REGISTER' || action.type === 'LOGIN') {
    if (!action.error) {
      localStorage.setItem('jwt', action.payload.user.token);
      servisec.getToken(action.payload.user.token);
    }
  } else if (action.type === 'LOGOUT') {
    window.localStorage.setItem('jwt', '');
    servisec.getToken(null);
  }
  next(action);
};

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, localStorageMiddleware))
);

export default store;
