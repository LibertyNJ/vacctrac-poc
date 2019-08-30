import React from 'react';
import { Button, StyleSheet, Switch, Text, View } from 'react-native';

export default function VaccinationTask() {
  return (
    <View key={item.key} style={{ marginBottom: 16 }}>
      <Text>Vaccine: {item.vaccine}</Text>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Text>Date: {item.date}</Text>
        <Button title="Set date" onPress={() => DatePickerAndroid.open} />
      </View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Text>Completed</Text>
        <Switch />
      </View>
    </View>
  );
}
