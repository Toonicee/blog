import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import FormArticle from '../Form-article/Form-article';
import { articleCreate } from '../../redux/actions';
import { fetchCreateArticleFailure } from '../../redux/actions/article/article';

const validation = Yup.object().shape({
  title: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  body: Yup.string().required('Required'),
});

const mapStateToProps = ({ article }) => ({
  articleState: article.articleState,
  slug: article.articleCurrent.slug,
});

const mapDispatchToProps = {
  articleCreateConnect: articleCreate,
};

const FormCreateArticle = ({ articleCreateConnect, articleState, slug }) => {
  const onSubmit = (values, { setSubmitting, setErrors }) => {
    const formattedValue = {
      ...values,
      tagList: values.tagList.split(' '),
    };
    articleCreateConnect(formattedValue).catch(error => {
      const { errors } = error.response.data;
      setErrors(errors);
      fetchCreateArticleFailure();
      setSubmitting(false);
    });
  };

  const initialValues = {
    title: '',
    description: '',
    body: '',
    tagList: '',
  };

  if (articleState === 'create') {
    localStorage.setItem('articleSlug', slug);
    return <Redirect to={`/articles/${slug}`} />;
  }
  return (
    <WrapperForm>
      <FormArticle onSubmit={onSubmit} initialValues={initialValues} validation={validation} />
    </WrapperForm>
  );
};

FormCreateArticle.defaultProps = {
  articleState: '',
  slug: '',
};

FormCreateArticle.propTypes = {
  articleCreateConnect: PropTypes.func.isRequired,
  articleState: PropTypes.string,
  slug: PropTypes.string,
};

const WrapperForm = styled.div`
  width: 50%;
  max-width: 700px;
  margin: 0 auto;
`;

export default connect(mapStateToProps, mapDispatchToProps)(FormCreateArticle);
