import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, Text } from 'react-native';

Bold.propTypes = {
  children: PropTypes.string.isRequired,
};

export default function Bold({ children }) {
  return <Text style={styles.Text}>{children}</Text>;
}

const styles = StyleSheet.create({
  Text: { fontWeight: 'bold' },
});
