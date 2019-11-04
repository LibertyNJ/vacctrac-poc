import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import Paragraph from '../../../../../components/Paragraph';

UpcomingEvent.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default function UpcomingEvent({ item: { id, name } }) {
  return (
    <View key={id}>
      <Paragraph last>{name}</Paragraph>
    </View>
  );
}
