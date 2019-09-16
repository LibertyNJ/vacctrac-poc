'use-strict';

import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

HorizontalRule.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default function HorizontalRule({ style }) {
  return <View style={[styles.View, style]} />;
}

const styles = StyleSheet.create({
  View: {
    borderBottomColor: 'gray',
    borderBottomWidth: 0.25,
    borderStyle: 'solid',
  },
});
