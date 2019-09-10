import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, View } from 'react-native';

import Header from './Header';

Section.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
  last: PropTypes.bool,
  style: PropTypes.object,
};

export default function Section({ children, heading, last, style }) {
  return (
    <View style={[styles.View, isLastSection(last) && styles.last, style]}>
      <Header style={styles.Header}>{heading}</Header>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {},
  last: {
    marginBottom: 0,
  },
  View: {
    marginBottom: 20,
  },
});

function isLastSection(last) {
  return !!last;
}
