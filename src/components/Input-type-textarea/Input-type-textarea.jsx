import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'formik-antd';

const InputTypeTextArea = ({ name, children, placeholder }) => {
  return (
    <Form.Item name={name}>
      <label htmlFor={name}>{children}</label>
      <Input.TextArea
        id={name}
        // autoSize={{ minRows: 3, maxRows: 7 }}
        name={name}
        placeholder={placeholder}
      />
    </Form.Item>
  );
};

InputTypeTextArea.defaultProps = {
  placeholder: '',
  children: null,
};

InputTypeTextArea.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default InputTypeTextArea;
