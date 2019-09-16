'use-strict';

import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

Bold.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default function Bold({ children, style }) {
  return <Text style={[styles.Text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  Text: {
    fontWeight: 'bold',
  },
});
