import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Event({ item }) {
  return (
    <View key={item.key} style={styles.view}>
      <Text>{item.date}</Text>
      <Text>{item.event}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    marginBottom: 16,
  },
});
