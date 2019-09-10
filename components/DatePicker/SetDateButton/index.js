import React from 'react';
import PropTypes from 'prop-types';

import { Button, StyleSheet } from 'react-native';

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
      title="Set date"
    />
  );
}

const styles = StyleSheet.create({
  Button: {},
});
