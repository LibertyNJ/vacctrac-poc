import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, View } from 'react-native';

import Heading from '../../../../../components/Heading';

SectionHeader.propTypes = {
  section: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
};

export default function SectionHeader({ section: { title } }) {
  return (
    <View style={styles.View}>
      <Heading level={3} style={styles.Text}>
        {title}
      </Heading>
    </View>
  );
}

const styles = StyleSheet.create({
  Heading: {},
  View: {},
});
