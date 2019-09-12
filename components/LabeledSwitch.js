import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, Switch, View } from 'react-native';

import Bold from './Bold';
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
      <Paragraph last style={styles.Paragraph}>
        {label}
        {'\n'}
        <Bold>{value ? 'Yes' : 'No'}</Bold>
      </Paragraph>
      <Switch
        disabled={disabled}
        onChange={onChange}
        style={styles.Switch}
        thumbColor={disabled ? 'gray' : 'white'}
        trackColor={{ false: 'red', true: 'green' }}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Paragraph: {},
  Switch: {},
  View: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
