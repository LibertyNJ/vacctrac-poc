import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header({ children }) {
  return (
    <View style={styles.header}>
      <Text style={styles.heading}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    marginBottom: 16,
  },
  heading: {
    fontSize: 24,
    textAlign: 'center',
  },
});
