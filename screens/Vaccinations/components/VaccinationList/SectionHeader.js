import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SectionHeader({ section: { title } }) {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  view: {
    backgroundColor: 'lightgray',
  },
});
