import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, View } from 'react-native';

import InfoButton from './InfoButton';
import VaccineIdentification from './VaccineIdentification';

VaccineInfoCard.propTypes = {
  item: PropTypes.shape({
    cdcVisSlug: PropTypes.string.isRequired,
    image: PropTypes.node.isRequired,
    name: PropTypes.object.isRequired,
  }).isRequired,
};

export default function VaccineInfoCard({ item: { cdcVisSlug, image, name } }) {
  return (
    <View style={styles.View}>
      <VaccineIdentification
        image={image}
        name={name}
        style={styles.VaccineIdentification}
      />
      <InfoButton
        cdcVisSlug={cdcVisSlug}
        name={name.full}
        style={styles.InfoButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  InfoButton: {},
  VaccineIdentification: {
    marginBottom: 20,
  },
  View: {
    borderColor: 'gray',
    borderStyle: 'solid',
    borderWidth: 0.25,
    padding: 20,
  },
});
