import React from 'react';
import PropTypes from 'prop-types';

import { CheckBox, StyleSheet, View } from 'react-native';

import Paragraph from './Paragraph';

LabeledCheckBox.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  value: PropTypes.bool.isRequired,
};

export default function LabeledCheckBox({
  disabled,
  label,
  onChange,
  style,
  value,
}) {
  return (
    <View style={[styles.View, style]}>
      <CheckBox
        disabled={disabled}
        onChange={onChange}
        style={styles.CheckBox}
        value={value}
      />
      <Paragraph last style={styles.Paragraph}>
        {label}
      </Paragraph>
    </View>
  );
}

const styles = StyleSheet.create({
  CheckBox: {},
  Paragraph: {},
  View: {
    flexDirection: 'row',
  },
});
