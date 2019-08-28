import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

import Header from './components/Header';
import Navigation from './components/Navigation';

import Home from './views/Home';
import Info from './views/Info';
import Todo from './views/Todo';

export default class App extends React.Component {
  static styles = StyleSheet.create({
    body: { flex: 1, paddingHorizontal: 16 },
    scheduledEvent: { marginBottom: 16 },
    section: { marginBottom: 16 },
    sectionHeader: { fontWeight: 'bold', marginBottom: 16 },
    view: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
  });

  state = {
    activeView: 'Home',
  };

  handleNavigationButtonPress = targetView => {
    this.setState({ activeView: targetView });
  };

  render = () => (
    <View style={App.styles.view}>
      <Header />
      <View style={App.styles.body}>
        {this.state.activeView === 'Home' && <Home />}
        {this.state.activeView === 'Info' && <Info />}
        {this.state.activeView === 'Todo' && <Todo />}
      </View>
      <Navigation
        handleNavigationButtonPress={this.handleNavigationButtonPress}
      />
    </View>
  );
}

// const styles = StyleSheet.create({
//   body: { flex: 1, paddingHorizontal: 16 },
//   scheduledEvent: { marginBottom: 16 },
//   section: { marginBottom: 16 },
//   sectionHeader: { fontWeight: 'bold', marginBottom: 16 },
//   view: {
//     flex: 1,
//     paddingTop: StatusBar.currentHeight,
//   },
// });
