import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, View } from 'react-native';

import Paragraph from '../../../../../components/Paragraph';

UpcomingEvent.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default function UpcomingEvent({ item: { id, name } }) {
  return (
    <View key={id} style={styles.View}>
      <Paragraph last style={styles.Paragraph}>
        {name}
      </Paragraph>
    </View>
  );
}

const styles = StyleSheet.create({
  Paragraph: {},
  View: {},
});
