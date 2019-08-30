import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SectionHeader({ section: { title } }) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}
