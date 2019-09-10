import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet } from 'react-native';

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
    <Paragraph last style={[styles.Paragraph, style]}>
      {label}
      {'\n'}
      <Bold>{date ? formatDate(date) : 'Date not set!'}</Bold>
    </Paragraph>
  );
}

const styles = StyleSheet.create({
  Paragraph: {},
});
