import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function VaccineName({ image }) {
  return (
    <View style={styles.view}>
      <Image source={image} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    borderColor: 'black',
    borderWidth: 1,
    height: 100,
    width: 100,
  },
  view: {},
});
