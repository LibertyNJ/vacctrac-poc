import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, Text, View } from 'react-native';

import Icon from '@expo/vector-icons/FontAwesome5';

import AddDoseButton from './AddDoseButton';
import RemoveDoseButton from './RemoveDoseButton';
import VaccinationCompletionSwitch from './VaccinationCompletionSwitch';
import VaccinationDatePicker from './VaccinationDatePicker';

import HorizontalRule from '../../../../../../../components/HorizontalRule';

Body.propTypes = {
  canAddDose: PropTypes.bool.isRequired,
  canToggleCompleted: PropTypes.bool.isRequired,
  completed: PropTypes.bool.isRequired,
  createdById: PropTypes.number,
  date: PropTypes.instanceOf(Date),
  id: PropTypes.number.isRequired,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default function Body({
  canAddDose,
  canToggleCompleted,
  completed,
  createdById,
  date,
  id,
  style,
}) {
  return (
    <View style={[styles.View, style]}>
      <VaccinationCompletionSwitch
        disabled={!canToggleCompleted}
        id={id}
        label="Completed:"
        style={styles.VaccinationCompletionSwitch}
        value={completed}
      />
      <HorizontalRule style={styles.HorizontalRule} />
      <VaccinationDatePicker
        date={date}
        id={id}
        label="Date:"
        style={styles.VaccinationDatePicker}
      />
      {completed && canAddDose && (
        <>
          <HorizontalRule style={styles.HorizontalRule} />
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text>Add dose</Text>
            <AddDoseButton id={id} style={styles.AddDoseButton}>
              <Icon color="white" name="plus-circle" size={24} />
            </AddDoseButton>
          </View>
        </>
      )}
      {!completed && createdById && (
        <>
          <HorizontalRule style={styles.HorizontalRule} />
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text>Remove dose</Text>
            <RemoveDoseButton
              createdById={createdById}
              id={id}
              style={styles.RemoveDoseButton}
            >
              <Icon color="white" name="minus-circle" size={24} />
            </RemoveDoseButton>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  AddDoseButton: {
    backgroundColor: 'green',
    height: 40,
    width: 40,
  },
  HorizontalRule: {
    marginVertical: 10,
  },
  RemoveDoseButton: {
    backgroundColor: 'red',
    height: 40,
    width: 40,
  },
  VaccinationCompletionSwitch: {
    alignItems: 'center',
    marginRight: -4,
  },
  VaccinationDatePicker: {},
  View: {},
});
