import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './Header';

export default function Screen({ children, heading }) {
  return (
    <>
      <Header>{heading}</Header>
      <View style={styles.body}>{children}</View>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    flexShrink: 1,
    paddingHorizontal: 16,
  },
});
