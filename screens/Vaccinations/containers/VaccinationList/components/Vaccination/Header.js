import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, View } from 'react-native';

import Heading from '../../../../../../components/Heading';
import Paragraph from '../../../../../../components/Paragraph';

Header.propTypes = {
  dose: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default function Header({ dose, name, style }) {
  return (
    <View style={[styles.View, style]}>
      <Heading level={3} style={styles.Heading}>
        {name}
      </Heading>
      {isFollowupDose(dose) && (
        <Paragraph last style={styles.Paragraph}>
          Dose # {dose}
        </Paragraph>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  Paragraph: {
    fontWeight: 'bold',
  },
  View: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

function isFollowupDose(dose) {
  return dose > 1;
}
