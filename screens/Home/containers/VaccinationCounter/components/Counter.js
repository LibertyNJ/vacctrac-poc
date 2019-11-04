import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'react-native';

import Bold from '../../../../../components/Bold';
import Paragraph from '../../../../../components/Paragraph';

Counter.propTypes = {
  count: PropTypes.number,
  style: PropTypes.object,
};

export default function Counter({ count, style }) {
  return (
    <Paragraph last style={style}>
      {count ? (
        <Text>
          You have <Bold>{count.toString()}</Bold> vaccinations remaining.
        </Text>
      ) : (
        <Text>You have completed all required vaccinations.</Text>
      )}
    </Paragraph>
  );
}
