'use-strict';

import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import DateDisplay from './DateDisplay';
import SetDateButton from './SetDateButton';

DatePicker.propTypes = {
  date: PropTypes.instanceOf(Date),
  handleDateSet: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default function DatePicker({ date, handleDateSet, label, style }) {
  return (
    <View style={[styles.View, style]}>
      <DateDisplay date={date} label={label} style={styles.DateDisplay} />
      <SetDateButton date={date} handleDateSet={handleDateSet} />
    </View>
  );
}

const styles = StyleSheet.create({
  DateDisplay: {
    flexShrink: 1,
  },
  View: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
