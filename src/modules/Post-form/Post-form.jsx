import React from 'react';
import { Form, SubmitButton } from 'formik-antd';
import { Formik } from 'formik';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { InputTypeText, InputTypeTextArea } from '../../components';

const mapStateToProps = state => ({ state });

const PostForm = props => {
  console.log(props);
  return (
    <WrapperForm>
      <Formik
        initialValues={{
          title: '',
          description: '',
          content: '',
          tags: '',
        }}
        onSubmit={() => console.log('OK')}
      >
        <Form>
          <InputTypeText type="text" name="title" placeholder="title" validating={false} />
          <InputTypeText
            type="text"
            name="description"
            placeholder="description"
            validating={false}
          />
          <InputTypeTextArea name="content" placeholder="content" />
          <InputTypeText type="text" name="tags" placeholder="tags" validating={false} />
          <WrapperButton>
            <SubmitButton size="large">Опубликовать</SubmitButton>
          </WrapperButton>
        </Form>
      </Formik>
    </WrapperForm>
  );
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

export default connect(mapStateToProps)(PostForm);
