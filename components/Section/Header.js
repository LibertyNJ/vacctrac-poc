'use-strict';

import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import Heading from '../Heading';

Header.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default function Header({ children, style }) {
  return (
    <View style={style}>
      <Heading level={2}>{children}</Heading>
    </View>
  );
}
