import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, View } from 'react-native';

import Body from './Body';
import Header from './Header';

Vaccination.propTypes = {
  item: PropTypes.shape({
    canAddDose: PropTypes.bool.isRequired,
    canToggleCompleted: PropTypes.bool.isRequired,
    completed: PropTypes.bool.isRequired,
    createdById: PropTypes.number,
    date: PropTypes.instanceOf(Date),
    dose: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default function Vaccination({
  item: {
    canAddDose,
    canToggleCompleted,
    completed,
    createdById,
    date,
    dose,
    id,
    name,
  },
}) {
  return (
    <View style={styles.View}>
      <Header
        completed={completed}
        dose={dose}
        id={id}
        name={name}
        style={styles.Header}
      />
      <Body
        canAddDose={canAddDose}
        canToggleCompleted={canToggleCompleted}
        completed={completed}
        createdById={createdById}
        date={date}
        id={id}
        style={styles.Body}
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
