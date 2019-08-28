import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function VaccineName() {
  return (
    <View style={styles.view}>
      <Text style={styles.brandName}>TDaP</Text>
      <Text style={styles.genericName}>
        Tetanus, Diphtheria, and acellular Pertussis
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  brandName: {},
  genericName: {},
  view: {
    flex: 1,
  },
});
