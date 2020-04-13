import {
  favorite,
  unfavorite,
  getAllArticles,
  getArticle,
  articleCreate,
  editArticle,
  delArticle,
} from './article/async-article';
import { resetState } from './article/article';
import { setUserData, loginUser, registration } from './auth/async-auth';
import { resetFormState } from './auth/auth';
import { getAllComments, addNewComment, deleteComment } from './comment/async-comment';

export {
  favorite,
  deleteComment,
  unfavorite,
  resetState,
  getAllArticles,
  getArticle,
  articleCreate,
  setUserData,
  loginUser,
  registration,
  resetFormState,
  editArticle,
  delArticle,
  addNewComment,
  getAllComments,
};
