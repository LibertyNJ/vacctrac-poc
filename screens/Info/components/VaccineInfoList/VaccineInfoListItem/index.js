import React from 'react';
import { StyleSheet, View } from 'react-native';

import InfoButton from './InfoButton';
import VaccineIdentification from './VaccineIdentification';

export default function VaccineInfoListItem({ item }) {
  return (
    <View style={styles.view}>
      <VaccineIdentification image={item.image} name={item.name} />
      <InfoButton cdcVisSlug={item.cdcVisSlug} name={item.name} />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'lightgray',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    display: 'flex',
    marginBottom: 16,
  },
});
