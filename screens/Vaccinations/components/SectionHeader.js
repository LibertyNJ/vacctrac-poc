import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, View } from 'react-native';

import Heading from '../../../components/Heading';

SectionHeader.propTypes = {
  section: PropTypes.shape({
    data: PropTypes.array,
    title: PropTypes.string.isRequired,
  }),
};

export default function SectionHeader({ section: { data, title } }) {
  return (
    !isEmpty(data) && (
      <View style={styles.View}>
        <Heading level={2} style={styles.Text}>
          {title}
        </Heading>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  Heading: {},
  View: {},
});

function isEmpty(array) {
  return array.length === 0;
}
