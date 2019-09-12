import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome5';

import Button from '../../Button';

import handlePress from './handle-press';

SetDateButton.propTypes = {
  date: PropTypes.instanceOf(Date),
  handleDateSet: PropTypes.func.isRequired,
  style: PropTypes.object,
};

export default function SetDateButton({ date, handleDateSet, style }) {
  return (
    <Button
      onPress={() => handlePress(date, handleDateSet)}
      style={[styles.Button, style]}
    >
      <Icon color="white" name="calendar-day" size={24} />
    </Button>
  );
}

const styles = StyleSheet.create({
  Button: {
    height: 40,
    width: 40,
  },
});
