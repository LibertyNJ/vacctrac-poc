import React from 'react';
import {
  Button,
  DatePickerAndroid,
  DatePickerIOS,
  FlatList,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';

export default function Todo() {
  return (
    <>
      <Text></Text>
      <FlatList
        data={[
          { date: '08/06/2050', key: '1', vaccine: 'MMR' },
          { date: '08/08/2050', key: '2', vaccine: 'Shingrix' },
          { date: '08/10/2050', key: '3', vaccine: 'TDaP' },
        ]}
        renderItem={({ item }) => (
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
        )}
      />
    </>
  );
}
