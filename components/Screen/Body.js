'use-strict';

import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

Body.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default function Body({ children, style }) {
  return <View style={style}>{children}</View>;
}
