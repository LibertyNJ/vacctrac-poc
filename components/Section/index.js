import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './Header';

export default function Section({ children, heading }) {
  return (
    <View style={styles.view}>
      <Header>{heading}</Header>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    display: "flex",
    marginBottom: 16,
  },
});
