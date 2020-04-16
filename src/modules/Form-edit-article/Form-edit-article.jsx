import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import FormArticle from '../Form-article/Form-article';
import { articleEdit, resetState } from '../../redux/actions';

const validation = Yup.object().shape({
  title: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  body: Yup.string().required('Required'),
});

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
  articleEditConnect: articleEdit,
  resetStateConnect: resetState,
};

const FormEditArticle = ({ articleEditConnect, articleCurrent, articleState }) => {
  const onSubmit = values => {
    articleEditConnect(articleCurrent.slug, values);
  };

  const initialValues = {
    title: articleCurrent.title,
    description: articleCurrent.description,
    body: articleCurrent.body,
    tagList: articleCurrent.tagList,
  };
  if (articleState === 'update') {
    return <Redirect to={`/articles/${articleCurrent.slug}`} />;
  }
  return (
    <WrapperForm>
      <FormArticle onSubmit={onSubmit} initialValues={initialValues} validation={validation} />
    </WrapperForm>
  );
};

FormEditArticle.defaultProps = {
  articleState: '',
};

FormEditArticle.propTypes = {
  articleEditConnect: PropTypes.func.isRequired,
  articleState: PropTypes.string,
  articleCurrent: PropTypes.objectOf(PropTypes.string).isRequired,
};

const WrapperForm = styled.div`
  width: 50%;
  max-width: 700px;
  margin: 0 auto;
`;

export default connect(mapStateToProps, mapDispatchToProps)(FormEditArticle);
