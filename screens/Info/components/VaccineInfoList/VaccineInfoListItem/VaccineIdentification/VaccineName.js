import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function VaccineName({ name }) {
  return (
    <View style={styles.view}>
      <Text style={styles.simple}>{name.simple}</Text>
      <Text style={styles.full}>{name.full}</Text>
      <Text style={styles.brand}>{name.brand}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  brand: { fontStyle: 'italic' },
  full: {},
  simple: { fontWeight: 'bold' },
  view: {
    flex: 1,
  },
});
