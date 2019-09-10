import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, View } from 'react-native';

import Heading from '../Heading';

Header.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default function Header({ children, style }) {
  return (
    <View style={[styles.View, style]}>
      <Heading level={2} style={styles.Text}>
        {children}
      </Heading>
    </View>
  );
}

const styles = StyleSheet.create({
  Heading: {},
  View: {},
});
