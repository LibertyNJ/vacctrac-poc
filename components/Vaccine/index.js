import React from 'react';
import { StyleSheet, View } from 'react-native';
import Body from './Body';
import Header from './Header';

export default function Vaccine() {
  return (
    <View style={styles.view}>
      <Header />
      <Body />
    </View>
  );
}

const styles = StyleSheet.create({

  view: {
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    display: 'flex',
    margin: 16,
  },
});
