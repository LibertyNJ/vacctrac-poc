'use-strict';

import PropTypes from 'prop-types';
import React from 'react';

import Bold from '../Bold';
import Paragraph from '../Paragraph';

import formatDate from '../../util/format-date';

DateDisplay.propTypes = {
  date: PropTypes.instanceOf(Date),
  label: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default function DateDisplay({ date, label, style }) {
  return (
    <Paragraph last style={style}>
      {label}
      {'\n'}
      <Bold>{date ? formatDate(date) : 'Date not set!'}</Bold>
    </Paragraph>
  );
}
