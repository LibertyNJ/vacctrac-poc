import Icon from '@expo/vector-icons/FontAwesome5';
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import HorizontalRule from '../../../../../../../../components/HorizontalRule';
import Paragraph from '../../../../../../../../components/Paragraph';

import Button from './containers/Button';

AddDoseButton.propTypes = {
  id: PropTypes.string.isRequired,
  previousDoseId: PropTypes.string.isRequired,
};

export default function AddDoseButton({ id, previousDoseId }) {
  return (
    <>
      <HorizontalRule style={styles.HorizontalRule} />
      <View style={styles.View}>
        <Paragraph>Remove dose</Paragraph>
        <Button id={id} previousDoseId={previousDoseId} style={styles.Button}>
          <Icon color="white" name="minus-circle" size={24} />
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  Button: {
    backgroundColor: 'red',
    height: 40,
    width: 40,
  },
  HorizontalRule: {
    marginVertical: 10,
  },
  View: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
