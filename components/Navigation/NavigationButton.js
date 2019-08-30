import React from 'react';
import { Button, StyleSheet } from 'react-native';

export default function NavigationButton({ onPress, title }) {
  return <Button onPress={onPress} style={styles.button} title={title} />;
}

const styles = StyleSheet.create({
  button: {},
});
