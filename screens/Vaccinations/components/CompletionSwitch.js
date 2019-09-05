import React from 'react';
import { Switch, StyleSheet, Text, View } from 'react-native';

export default function CompletionSwitch({ handleChange, value }) {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Completed: {value}</Text>
      <Switch onChange={handleChange} style={styles.switch} value={value} />
    </View>
  );
}

const styles = StyleSheet.create({
  switch: {},
  text: {},
  view: {},
});
