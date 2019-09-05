import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import reducers from './reducers';

import Home from './screens/Home';
import Info from './screens/Info';
import Vaccinations from './screens/Vaccinations';

const store = createStore(reducers);

const Navigation = createBottomTabNavigator({
  Home,
  Vaccinations,
  Info,
});

const AppContainer = createAppContainer(Navigation);

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
