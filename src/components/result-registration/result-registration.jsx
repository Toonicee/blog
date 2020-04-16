import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Result } from 'antd';
import { Link } from 'react-router-dom';
import { CheckCircleTwoTone } from '@ant-design/icons';

const ResultRegistration = ({ success, resetFormState }) => {
  return (
    <WrapperResult success={success}>
      <Result
        icon={<CheckCircleTwoTone twoToneColor="#52c41a" />}
        title="Вы успешно зарегистрировались!"
        extra={
          <Link onClick={() => resetFormState(false)} to="/login" type="primary">
            Войти
          </Link>
        }
      />
    </WrapperResult>
  );
};

ResultRegistration.defaultProps = {
  success: false,
};

ResultRegistration.propTypes = {
  resetFormState: PropTypes.func.isRequired,
  success: PropTypes.bool,
};

const WrapperResult = styled.div`
  width: 300px;
  background-color: #fff;
`;

export default ResultRegistration;
