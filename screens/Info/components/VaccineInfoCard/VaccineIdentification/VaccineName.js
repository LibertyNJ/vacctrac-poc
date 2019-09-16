'use-strict';

import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Heading from '../../../../../components/Heading';
import Italic from '../../../../../components/Italic';
import Paragraph from '../../../../../components/Paragraph';

VaccineName.propTypes = {
  name: PropTypes.shape({
    brand: PropTypes.string,
    full: PropTypes.string.isRequired,
    simple: PropTypes.string.isRequired,
  }).isRequired,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default function VaccineName({ name, style }) {
  return (
    <View style={style}>
      <Heading level={2} style={styles.Heading}>
        {name.simple}
      </Heading>
      <Paragraph last>
        {name.full}
        {'\n'}
        <Italic>{name.brand}</Italic>
      </Paragraph>
    </View>
  );
}

const styles = StyleSheet.create({
  Heading: {
    lineHeight: 20,
    marginBottom: 20,
  },
});
