import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

export default function Navigation({ handleNavigationButtonPress }) {
  return (
    <View style={styles.view}>
      <Button
        onPress={() => handleNavigationButtonPress('Home')}
        style={styles.button}
        title="Home"
      />
      <Button
        onPress={() => handleNavigationButtonPress('Todo')}
        style={styles.button}
        title="Todo"
      />
      <Button
        onPress={() => handleNavigationButtonPress('Info')}
        style={styles.button}
        title="Info"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {},
  view: {
    backgroundColor: 'gray',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 'auto',
    padding: 8,
  },
});
