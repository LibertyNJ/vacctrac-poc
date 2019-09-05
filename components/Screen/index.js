import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

import Header from './Header';

export default function Screen({ children, heading }) {
  return (
    <View style={styles.screen}>
      <Header>{heading}</Header>
      <View style={styles.body}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flexShrink: 1,
    paddingHorizontal: 16,
  },
  screen: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});

