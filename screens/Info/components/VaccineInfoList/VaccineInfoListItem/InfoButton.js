import React from 'react';
import { Button, Linking, StyleSheet } from 'react-native';

export default function InfoButton({ cdcVisSlug, name }) {
  return (
    <Button
      onPress={() =>
        Linking.openURL(
          `https://www.cdc.gov/vaccines/hcp/vis/vis-statements/${cdcVisSlug}`
        ).catch(error => alert(error))
      }
      style={styles.button}
      title={`Learn about ${name.full}`}
    />
  );
}

const styles = StyleSheet.create({
  button: {},
});
