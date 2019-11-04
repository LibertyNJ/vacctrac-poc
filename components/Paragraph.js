import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  last: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default function Paragraph({ children, last, style }) {
  return (
    <Text style={[styles.Text, isLastParagraph(last) && styles.last, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  last: {
    marginBottom: 0,
  },
  Text: {
    lineHeight: 20,
    marginBottom: 20,
  },
});

function isLastParagraph(last) {
  return !!last;
}
