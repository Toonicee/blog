import { combineReducers } from 'redux';
import auth from './auth';

import articles from './article-list';
import userProfile from './profile';
import article from './article';
import comments from './comments';

export default combineReducers({ auth, articles, article, userProfile, comments });
