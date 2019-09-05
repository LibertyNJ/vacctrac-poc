import React from 'react';
import { Button, StyleSheet, Switch, Text, View } from 'react-native';

import AddDoseButton from './AddDoseButton';
import VaccinationCompletionSwitch from '../../../containers/VaccinationCompletionSwitch';
import VaccinationDatePicker from '../../../containers/VaccinationDatePicker';

export default function VaccinationListItem({ item }) {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>
        {item.name}
        {item.dose > 1 && `, dose # ${item.dose}`}
      </Text>
      {item.completed && item.canAddDose && <AddDoseButton id={item.id} />}
      <VaccinationDatePicker date={item.date} id={item.id} label="Date: " />
      <VaccinationCompletionSwitch id={item.id} value={item.completed} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {},
  view: {
    marginBottom: 16,
  },
});
