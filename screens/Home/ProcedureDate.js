import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function ProcedureDate() {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginBottom: 16,
      }}
    >
      <Text>Your procedure is scheduled for: 08/12/2050</Text>
      <Button title="Change date" />
    </View>
  );
}
