import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>VaccTrac</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: { fontSize: 24, textAlign: 'center' },
});
