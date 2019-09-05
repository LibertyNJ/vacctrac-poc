import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

export default connect(mapStateToProps)(Counter);

function mapStateToProps(state) {
  return {
    count: state.vaccinations.filter(vaccination => !isCompleted(vaccination))
      .length,
  };
}

function isCompleted({ completed }) {
  return !!completed;
}

function Counter({ count }) {
  return (
    <Text style={styles.text}>
      {count
        ? `You have ${count} vaccinations remaining.`
        : 'You have completed all required vaccinations!'}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {},
});
