import Icon from '@expo/vector-icons/FontAwesome5';
import PropTypes from 'prop-types';
import React from 'react';
import { Linking, StyleSheet, Text } from 'react-native';

import Button from '../../../../components/Button';
import handleError from '../../../../util/handle-error';

InfoButton.propTypes = {
  cdcVisSlug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default function InfoButton({ cdcVisSlug, name }) {
  return (
    <Button onPress={() => handlePress(cdcVisSlug)} style={styles.Button}>
      <Text style={styles.Text}>See CDC Vaccine Information Statement </Text>
      <Icon color="white" name="external-link-alt" size={14} />
    </Button>
  );
}

const styles = StyleSheet.create({
  Button: {
    height: 40,
    justifyContent: 'center',
  },
  Text: {
    color: 'white',
  },
});

async function handlePress(cdcVisSlug) {
  try {
    await Linking.openURL(
      `https://www.cdc.gov/vaccines/hcp/vis/vis-statements/${cdcVisSlug}`
    );
  } catch (error) {
    handleError(error);
  }
}
