import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function DateDisplay({ date, label }) {
  return (
    <Text style={styles.text}>
      {label}
      {date ? date.toLocaleString() : 'date not set!'}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {},
});
