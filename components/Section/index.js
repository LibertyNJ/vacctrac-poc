'use-strict';

import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './Header';

Section.propTypes = {
  children: PropTypes.node.isRequired,
  headerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  heading: PropTypes.string.isRequired,
  last: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default function Section({
  children,
  headerStyle,
  heading,
  last,
  style,
}) {
  return (
    <View style={[styles.View, isLastSection(last) && styles.last, style]}>
      <Header style={headerStyle}>{heading}</Header>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
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
