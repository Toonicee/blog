import React from 'react';
import { HeartTwoTone } from '@ant-design/icons';
import { Statistic } from 'antd';
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
      <Statistic
        value={count}
        valueStyle={{ color: favorited ? '#cc2939' : null, fontSize: '16px' }}
        prefix={
          <HeartTwoTone className="icon-favorites" twoToneColor={favorited ? '#cc2939' : null} />
        }
      />
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
  outline: none;
  border: none;
  padding: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default connect(() => ({}), mapDispatchToProps)(FavoritesCount);
