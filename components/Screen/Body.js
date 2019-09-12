import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, View } from 'react-native';

Body.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default function Body({ children, style }) {
  return <View style={[styles.View, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  View: {},
});
