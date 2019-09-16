'use-strict';

import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import Heading from '../../../../../components/Heading';

SectionHeader.propTypes = {
  section: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
};

export default function SectionHeader({ section: { title } }) {
  return (
    <View>
      <Heading level={3}>{title}</Heading>
    </View>
  );
}
