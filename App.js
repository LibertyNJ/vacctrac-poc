import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

import Navigation from './components/Navigation';

import Home from './screens/Home';
import VaccineInfo from './screens/VaccineInfo';
import YourVaccinations from './screens/YourVaccinations';

export default class App extends React.Component {
  static styles = StyleSheet.create({
    view: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
  });

  state = {
    activeView: 'home',
  };

  handleNavigationButtonPress = targetView => {
    this.setState({ activeView: targetView });
  };

  render = () => (
    <View style={App.styles.view}>
      {this.state.activeView === 'home' && <Home />}
      {this.state.activeView === 'vaccine-info' && <VaccineInfo />}
      {this.state.activeView === 'your-vaccinations' && <YourVaccinations />}
      <Navigation
        handleNavigationButtonPress={this.handleNavigationButtonPress}
      />
    </View>
  );
}
