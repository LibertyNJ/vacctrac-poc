import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, Text } from 'react-native';

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default function Heading({ children, level, style }) {
  return (
    <Text style={[styles.Text, getLevelStyles(level), style]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  1: {
    fontSize: 24,
    lineHeight: 40,
  },
  2: {
    fontSize: 20,
    lineHeight: 40,
  },
  3: {
    fontSize: 18,
    lineHeight: 20,
  },
  4: {
    fontSize: 16,
    lineHeight: 20,
  },
  Text: {},
});

function getLevelStyles(level) {
  return styles[level];
}
