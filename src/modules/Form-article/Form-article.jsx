import React from 'react';
import { Form, Input, SubmitButton } from 'formik-antd';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormArticle = ({ onSubmit, initialValues, validation }) => {
  console.log(validation);
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validation}>
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
  );
};

FormArticle.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.instanceOf(Object).isRequired,
  validation: PropTypes.instanceOf(Object).isRequired,
};

const WrapperButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default FormArticle;
