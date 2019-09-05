import React from 'react';
import { StyleSheet, View } from 'react-native';

import DateDisplay from './DateDisplay';
import SetDateButton from './SetDateButton';

export default function DatePicker({ date, handleDateSet, label }) {
  return (
    <View style={styles.view}>
      <DateDisplay date={date} label={label} />
      <SetDateButton date={date} handleDateSet={handleDateSet} />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {},
});
