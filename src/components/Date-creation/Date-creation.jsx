import React from 'react';
import ruLocale from 'date-fns/locale/ru';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from 'prop-types';

const DateCreation = ({ date }) => {
  if (!date) {
    return null;
  }
  const formattedDate = formatDistanceToNow(new Date(date), {
    locale: ruLocale,
    addSuffix: true,
  });

  return (
    <p>
      <time dateTime={date}>{formattedDate}</time>
    </p>
  );
};

DateCreation.defaultProps = {
  date: '',
};

DateCreation.propTypes = {
  date: PropTypes.string,
};

export default DateCreation;
