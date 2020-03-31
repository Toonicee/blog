import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Block = ({ children, backcolor }) => (
  <BlockStyle backcolor={backcolor} className="block">
    {children}
  </BlockStyle>
);

Block.defaultProps = {
  backcolor: '',
};

Block.propTypes = {
  children: PropTypes.node.isRequired,
  backcolor: PropTypes.string,
};

const BlockStyle = styled.div`
  padding: 45px;
  background-color: ${props => props.backcolor};
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.04204);
  border-radius: 3px;
`;

export default Block;
