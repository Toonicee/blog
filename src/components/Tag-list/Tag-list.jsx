import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TagList = ({ tags }) => {
  if (tags.length === 0) return null;
  return (
    <div>
      <TagsWrapper>
        {tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </TagsWrapper>
    </div>
  );
};

TagList.defaultProps = {
  tags: [],
};

TagList.propTypes = {
  tags: PropTypes.instanceOf(Array),
};

const TagsWrapper = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  opacity: 0.7;
  font-size: 12px;

  li {
    margin: 0 0.5em 0 0;
    color: #5e6973;
    font-size: 13px;
    &:hover {
      color: #548eaa;
    }
  }
`;

export default TagList;
