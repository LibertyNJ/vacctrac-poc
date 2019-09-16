'use-strict';

import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Body from './Body';
import Header from './Header';

Vaccination.propTypes = {
  item: PropTypes.shape({
    date: PropTypes.instanceOf(Date),
    dose: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    isLatestDose: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    previousDoseId: PropTypes.number,
  }).isRequired,
};

export default function Vaccination({
  item: { date, dose, id, isCompleted, isLatestDose, name, previousDoseId },
}) {
  return (
    <View style={styles.View}>
      <Header dose={dose} name={name} style={styles.Header} />
      <Body
        date={date}
        id={id}
        isCompleted={isCompleted}
        isLatestDose={isLatestDose}
        style={styles.Body}
        previousDoseId={previousDoseId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {
    marginBottom: 20,
  },
  View: {
    borderColor: 'gray',
    borderStyle: 'solid',
    borderWidth: 0.25,
    padding: 20,
  },
});
