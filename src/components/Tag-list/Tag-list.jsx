import React from 'react';
import { Tag } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TagList = ({ tags }) => {
  if (tags.length === 0) return null;
  return (
    <div>
      <TagsWrapper>
        {tags.map(tag => (
          <li key={tag}>
            <Tag>{tag}</Tag>
          </li>
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
  margin: 0;
  list-style: none;
  padding: 0;
  opacity: 0.7;
  font-size: 12px;
`;

export default TagList;
