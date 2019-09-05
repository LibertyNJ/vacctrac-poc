import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import NavigationButton from './NavigationButton';

import { Link } from 'react-router-native';

export default function Navigation() {
  return (
    <View style={styles.view}>
      <NavigationButton to="/">Home</NavigationButton>
      <NavigationButton to="/your-vaccinations">
        Your Vaccinations
      </NavigationButton>
      <NavigationButton to="/vaccine-info">Vaccine Info</NavigationButton>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'gray',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 'auto',
    padding: 8,
  },
});
