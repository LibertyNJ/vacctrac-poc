import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function VaccineName() {
  return (
    <View style={styles.view}>
      <Image
        source={require('../../../assets/images/TDAP.jpg')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: { height: 100, width: 100 },
  view: {},
});
