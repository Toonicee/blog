import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonMain } from 'antd';

const Button = ({ children, type }) => <ButtonMain type={type}>{children}</ButtonMain>;

Button.defaultProps = {
  type: '',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};

export default Button;
