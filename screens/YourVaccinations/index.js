import React from 'react';
import {
  Button,
  DatePickerAndroid,
  DatePickerIOS,
  FlatList,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';

import Screen from '../../components/Screen';

import VaccinationTaskList from './VaccinationTaskList';

export default function YourVaccinations() {
  return (
    <Screen heading="Your Vaccinations">
      <VaccinationTaskList />
    </Screen>
  );
}

const styles = StyleSheet.create({});
