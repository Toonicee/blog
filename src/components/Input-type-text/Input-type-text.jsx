import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'formik-antd';
import { useField } from 'formik';
import { Icon } from 'antd';

import displayStatus from '../../helper/displayStatus';

const InputTypeText = ({ name, children, placeholder, type, icon, size, validating }) => {
  const [, meta] = useField(name);
  const status = validating ? displayStatus(meta) : null;
  return (
    <Form.Item name={name} hasFeedback validateStatus={status}>
      <label htmlFor={name}>{children}</label>
      <Input
        prefix={<Icon type={icon} />}
        size={size}
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </Form.Item>
  );
};

InputTypeText.defaultProps = {
  type: 'text',
  placeholder: '',
  children: null,
  size: 'default',
  icon: 'none',
  validating: true,
};

InputTypeText.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
  validating: PropTypes.bool,
};
export default InputTypeText;
