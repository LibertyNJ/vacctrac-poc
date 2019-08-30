import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function TaskDate() {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Text>Date: {item.date}</Text>
      <Button title="Set date" onPress={() => DatePickerAndroid.open} />
    </View>
  );
}
