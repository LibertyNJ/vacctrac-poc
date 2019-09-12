import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, View } from 'react-native';

import VaccineImage from './VaccineImage';
import VaccineName from './VaccineName';

VaccineIdentification.propTypes = {
  image: PropTypes.node.isRequired,
  name: PropTypes.object.isRequired,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default function VaccineIdentification({ image, name, style }) {
  return (
    <View style={[styles.View, style]}>
      <VaccineName name={name} style={styles.VaccineName} />
      <VaccineImage image={image} style={styles.VaccineImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  VaccineImage: {},
  VaccineName: {
    flexGrow: 1,
    flexShrink: 1,
  },
  View: {
    flexDirection: 'row',
  },
});
