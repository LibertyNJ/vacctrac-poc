
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import AddDoseButton from './AddDoseButton';
import RemoveDoseButton from './RemoveDoseButton';
import VaccinationCompletionSwitch from './containers/VaccinationCompletionSwitch';
import VaccinationDatePicker from './containers/VaccinationDatePicker';

import HorizontalRule from '../../../../../../../components/HorizontalRule';

Body.propTypes = {
  date: PropTypes.instanceOf(Date),
  id: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  isLatestDose: PropTypes.bool.isRequired,
  previousDoseId: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default function Body({
  date,
  id,
  isCompleted,
  isLatestDose,
  previousDoseId,
  style,
}) {
  return (
    <View style={style}>
      <VaccinationCompletionSwitch
        disabled={!isLatestDose}
        id={id}
        label="Completed:"
        style={styles.VaccinationCompletionSwitch}
        value={isCompleted}
      />
      <HorizontalRule style={styles.HorizontalRule} />
      <VaccinationDatePicker date={date} id={id} label="Date:" />
      {canAddDose(isCompleted, isLatestDose) && <AddDoseButton id={id} />}
      {canRemoveDose(isCompleted, isLatestDose, previousDoseId) && (
        <RemoveDoseButton id={id} previousDoseId={previousDoseId} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  HorizontalRule: {
    marginVertical: 10,
  },
  VaccinationCompletionSwitch: {
    alignItems: 'center',
    marginRight: -4,
  },
});

function canAddDose(isCompleted, isLatestDose) {
  return isCompleted && isLatestDose;
}

function canRemoveDose(isCompleted, isLatestDose, previousDoseId) {
  return !isCompleted && isLatestDose && !!previousDoseId;
}
