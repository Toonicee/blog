import React from 'react';
import { Form, Input, SubmitButton } from 'formik-antd';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { Redirect, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { articleCreate, editArticle, resetState } from '../../redux/actions';

const mapStateToProps = ({ article: { articleCurrent, articleState } }) => ({
  articleCurrent: {
    title: articleCurrent.title,
    description: articleCurrent.description,
    body: articleCurrent.body,
    tagList: articleCurrent.tagList,
    slug: articleCurrent.slug,
  },
  articleState,
});

const mapDispatchToProps = {
  articleCreateConnect: articleCreate,
  editArticleConnect: editArticle,
  resetStateConnect: resetState,
};

const PostForm = ({
  articleCreateConnect,
  editArticleConnect,
  articleCurrent,
  articleState,
  resetStateConnect,
}) => {
  const { pathname } = useLocation();
  const onSubmit = (values, { setSubmitting, setErrors }) => {
    if (pathname === '/add') {
      articleCreateConnect(
        values,
        error => setErrors(error),
        () => setSubmitting(false)
      );
    } else {
      editArticleConnect(articleCurrent.slug, values);
    }
  };

  const setInitialValues = currentPathname => {
    if (currentPathname === '/add') {
      return {
        title: '',
        description: '',
        body: '',
        tagList: '',
      };
    }
    return {
      title: articleCurrent.title,
      description: articleCurrent.description,
      body: articleCurrent.body,
      tagList: articleCurrent.tagList,
    };
  };
  if (articleState === 'created' || articleState === 'edited') {
    localStorage.setItem('articleSlug', articleCurrent.slug);
    resetStateConnect();
    return <Redirect to={`/articles/${articleCurrent.slug}`} />;
  }
  return (
    <WrapperForm>
      <Formik initialValues={setInitialValues(pathname)} onSubmit={onSubmit}>
        <Form>
          <Form.Item name="title">
            <Input name="title" placeholder="Заголовок поста" />
          </Form.Item>
          <Form.Item name="description">
            <Input name="description" placeholder="о чем этот пост?" />
          </Form.Item>
          <Form.Item name="body">
            <Input.TextArea rows={5} name="body" placeholder="напишите свой пост" />
          </Form.Item>
          <Form.Item name="tagList">
            <Input name="tagList" placeholder="введите теги" />
          </Form.Item>
          <WrapperButton>
            <SubmitButton size="large">Опубликовать</SubmitButton>
          </WrapperButton>
        </Form>
      </Formik>
    </WrapperForm>
  );
};

PostForm.defaultProps = {
  articleState: '',
};

PostForm.propTypes = {
  articleCreateConnect: PropTypes.func.isRequired,
  editArticleConnect: PropTypes.func.isRequired,
  articleState: PropTypes.string,
  resetStateConnect: PropTypes.func.isRequired,
  articleCurrent: PropTypes.objectOf(PropTypes.string).isRequired,
};

const WrapperForm = styled.div`
  width: 50%;
  max-width: 700px;
  margin: 0 auto;
`;

const WrapperButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
