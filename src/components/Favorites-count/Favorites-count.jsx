import React from 'react';
import { LikeTwoTone } from '@ant-design/icons';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { favorite, unfavorite } from '../../redux/actions';

const mapDispatchToProps = {
  favoriteConnect: favorite,
  unfavoriteConnect: unfavorite,
};
const FavoritesCount = ({ count, favoriteConnect, unfavoriteConnect, slug, favorited }) => {
  const like = () => {
    if (favorited) {
      return unfavoriteConnect(slug);
    }
    return favoriteConnect(slug);
  };

  return (
    <Button favorited={favorited} type="button" onClick={like}>
      {count}
      <LikeTwoTone width="2.5em" height="2.5em" twoToneColor={favorited ? '#0cf77e' : '#3e4240'} />
    </Button>
  );
};

FavoritesCount.defaultProps = {
  count: 0,
  slug: '',
  favorited: false,
};

FavoritesCount.propTypes = {
  count: PropTypes.number,
  slug: PropTypes.string,
  favoriteConnect: PropTypes.func.isRequired,
  unfavoriteConnect: PropTypes.func.isRequired,
  favorited: PropTypes.bool,
};

const Button = styled.button`
  cursor: pointer;
  background: inherit;
  border: none;
`;

export default connect(() => ({}), mapDispatchToProps)(FavoritesCount);
