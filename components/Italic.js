import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, Text } from 'react-native';

Italic.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default function Italic({ children, style }) {
  return <Text style={[styles.Text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  Text: {
    fontStyle: 'italic',
  },
});
