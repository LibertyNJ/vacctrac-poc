import React from 'react';
import PropTypes from 'prop-types';

import { Image, StyleSheet, View } from 'react-native';

VaccineImage.propTypes = {
  image: PropTypes.node.isRequired,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default function VaccineImage({ image, style }) {
  return <Image source={image} style={[styles.Image, style]} />;
}

const styles = StyleSheet.create({
  Image: {
    borderColor: 'gray',
    borderWidth: 0.25,
    height: 100,
    width: 100,
  },
});
