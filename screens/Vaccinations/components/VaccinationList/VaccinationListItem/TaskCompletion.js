import React from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

export default function TaskCompletion() {
  return (
    <View style={styles.view}>
      <Text>Completed</Text>
      <Switch />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row',
  },
});
