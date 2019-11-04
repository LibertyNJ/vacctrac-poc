import Icon from '@expo/vector-icons/FontAwesome5';
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import HorizontalRule from '../../../../../../../../components/HorizontalRule';
import Paragraph from '../../../../../../../../components/Paragraph';

import Button from './containers/Button';

AddDoseButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default function AddDoseButton({ id }) {
  return (
    <>
      <HorizontalRule style={styles.HorizontalRule} />
      <View style={styles.View}>
        <Paragraph last>Add dose</Paragraph>
        <Button id={id} style={styles.Button}>
          <Icon color="white" name="plus-circle" size={24} />
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  Button: {
    backgroundColor: 'green',
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
