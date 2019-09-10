import React from 'react';
import PropTypes from 'prop-types';

import { StatusBar, StyleSheet, View } from 'react-native';

import Header from './Header';

Screen.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default function Screen({ children, heading, style }) {
  return (
    <View style={[styles.View, style]}>
      <Header style={styles.Header}>{heading}</Header>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {},
  View: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
