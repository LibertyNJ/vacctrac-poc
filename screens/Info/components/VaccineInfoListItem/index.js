import React from 'react';
import { StyleSheet, View } from 'react-native';

import InfoButton from './InfoButton';
import VaccineIdentification from './VaccineIdentification';

export default function VaccineInfoListItem({ item }) {
  return (
    <View style={styles.View}>
      <VaccineIdentification
        image={item.image}
        name={item.name}
        style={styles.VaccineIdentification}
      />
      <InfoButton
        cdcVisSlug={item.cdcVisSlug}
        name={item.name}
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
    marginBottom: 20,
    padding: 20,
  },
});
