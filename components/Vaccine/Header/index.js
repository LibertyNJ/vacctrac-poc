import React from 'react';
import { StyleSheet, View } from 'react-native';

import VaccineImage from './VaccineImage';
import VaccineName from './VaccineName';

export default function Header() {
  return (
    <View style={styles.header}>
      <VaccineName />
      <VaccineImage />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    display: 'flex',
    flexDirection: 'row',
    padding: 16,
  },
});
