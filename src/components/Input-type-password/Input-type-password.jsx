import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'formik-antd';
import { LockOutlined } from '@ant-design/icons';
import { useField } from 'formik';

import displayStatus from '../../helper/displayStatus';

const InputTypePassword = ({ name, placeholder, children, size }) => {
  const [, meta] = useField(name);

  return (
    <Form.Item name={name} hasFeedback validateStatus={displayStatus(meta)}>
      <label htmlFor={name}>{children}</label>
      <Input.Password
        prefix={<LockOutlined className="site-form-item-icon" />}
        size={size}
        id={name}
        name={name}
        placeholder={placeholder}
      />
    </Form.Item>
  );
};

InputTypePassword.defaultProps = {
  placeholder: '',
  children: null,
  size: 'default',
};

InputTypePassword.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  size: PropTypes.string,
};

export default InputTypePassword;
