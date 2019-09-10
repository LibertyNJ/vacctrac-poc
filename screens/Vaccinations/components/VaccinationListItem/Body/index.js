import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, View } from 'react-native';

import AddDoseButton from './AddDoseButton';
import RemoveDoseButton from './RemoveDoseButton';
import VaccinationCompletionCheckBox from './VaccinationCompletionCheckBox';
import VaccinationDatePicker from './VaccinationDatePicker';

Body.propTypes = {
  canAddDose: PropTypes.bool.isRequired,
  completed: PropTypes.bool.isRequired,
  createdById: PropTypes.number,
  date: PropTypes.instanceOf(Date),
  id: PropTypes.number.isRequired,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default function Body({
  canAddDose,
  completed,
  createdById,
  date,
  id,
  style,
}) {
  return (
    <View style={[styles.View, style]}>
      <VaccinationCompletionCheckBox
        id={id}
        label="Completed"
        style={styles.VaccinationCompletionCheckBox}
        value={completed}
      />
      <VaccinationDatePicker
        date={date}
        id={id}
        label="Date:"
        style={styles.VaccinationDatePicker}
      />
      {completed && canAddDose && (
        <AddDoseButton
          id={id}
          style={styles.AddDoseButton}
          title={'Add dose'}
        />
      )}
      {!completed && createdById && (
        <RemoveDoseButton
          createdById={createdById}
          id={id}
          style={styles.RemoveDoseButton}
          title={'Remove dose'}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  AddDoseButton: {},
  RemoveDoseButton: {},
  VaccinationCompletionCheckBox: {
    alignItems: 'center',
    marginLeft: -7,
  },
  VaccinationDatePicker: {},
  View: {},
});
