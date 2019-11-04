import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, TouchableNativeFeedback, View } from 'react-native';

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default function Button({ children, onPress, style }) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={[styles.View, style]}>{children}</View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  View: {
    alignItems: 'center',
    backgroundColor: '#2196F3',
    borderRadius: 2,
    elevation: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
