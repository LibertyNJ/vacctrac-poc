import PropTypes from 'prop-types';
import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

import Body from './Body';
import Header from './Header';

Screen.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default function Screen({ children, heading, style }) {
  return (
    <View style={[styles.View, style]}>
      <Header>{heading}</Header>
      <Body style={styles.Body}>{children}</Body>
    </View>
  );
}

const styles = StyleSheet.create({
  Body: {
    flex: 1,
  },
  View: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
