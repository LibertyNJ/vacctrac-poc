import React from 'react';
import { StyleSheet, View } from 'react-native';

import NavigationButton from './NavigationButton';

export default function Navigation({ handleNavigationButtonPress }) {
  return (
    <View style={styles.view}>
      <NavigationButton
        onPress={() => handleNavigationButtonPress('home')}
        style={styles.button}
        title="Home"
      />
      <NavigationButton
        onPress={() => handleNavigationButtonPress('your-vaccinations')}
        style={styles.button}
        title="Your vaccinations"
      />
      <NavigationButton
        onPress={() => handleNavigationButtonPress('vaccine-info')}
        style={styles.button}
        title="Vaccine info"
      />
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
