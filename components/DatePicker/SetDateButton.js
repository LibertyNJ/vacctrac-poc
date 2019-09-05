import React from 'react';

import { Button, DatePickerAndroid, StyleSheet } from 'react-native';

export default function SetDateButton({ date, handleDateSet }) {
  return (
    <Button
      onPress={() => handlePress(date, handleDateSet)}
      style={styles.text}
      title="Set date"
    />
  );
}

const styles = StyleSheet.create({
  text: {},
});

async function handlePress(date, handleDateSet) {
  console.log(date);
  const { action, day, month, year } = await pickAndroidDate(date);
  console.log(action, day, month, year);
  if (isDateSet(action)) {
    handleDateSet(new Date(year, month, day));
  }
}

async function pickAndroidDate(defaultDate) {
  try {
    return await DatePickerAndroid.open({ date: defaultDate || new Date() });
  } catch (error) {
    alert(error);
  }
}

function isDateSet(action) {
  return action === DatePickerAndroid.dateSetAction;
}
