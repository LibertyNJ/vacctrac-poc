import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function EventListItem({ item }) {
  return (
    <View key={item.id} style={styles.view}>
      <Text style={styles.date}>
        {item.date ? item.date.toLocaleString() : 'No date set!'}
      </Text>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  date: {},
  name: {},
  view: {
    marginBottom: 16,
  },
});
