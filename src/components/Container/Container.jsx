import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = ({ children }) => <ContainerWrapper>{children}</ContainerWrapper>;

const ContainerWrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
