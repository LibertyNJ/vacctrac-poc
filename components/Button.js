import React from 'react';
import { Button, StyleSheet } from 'react-native';

export default function CustomButton({ children, onPress }) {
  return <Button onPress={onPress} style={styles.button} title={children} />;
}

const styles = StyleSheet.create({
  button: {},
});
