import React from 'react';
import { StyleSheet, View } from 'react-native';

import VaccineImage from './VaccineImage';
import VaccineName from './VaccineName';

export default function VaccineIdentification({ image, name }) {
  return (
    <View style={styles.view}>
      <VaccineName name={name} />
      <VaccineImage image={image} />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    padding: 16,
  },
});
