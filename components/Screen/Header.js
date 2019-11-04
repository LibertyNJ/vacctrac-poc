import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Heading from '../Heading';

Header.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default function Header({ children, style }) {
  return (
    <View style={[styles.View, style]}>
      <Heading level={1} style={styles.Heading}>
        {children}
      </Heading>
    </View>
  );
}

const styles = StyleSheet.create({
  Heading: {
    textAlign: 'center',
  },
  View: {
    borderBottomColor: 'gray',
    borderBottomWidth: 0.25,
    borderStyle: 'solid',
  },
});
