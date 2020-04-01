import { combineReducers } from 'redux';
import auth from './auth';
import article from './article';
import userProfile from './profile';

export default combineReducers({ auth, article, userProfile });
