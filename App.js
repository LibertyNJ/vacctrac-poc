import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { persistor, store } from './redux/store';
import About from './screens/About';
import Home from './screens/Home';
import Info from './screens/Info';
import Vaccinations from './screens/Vaccinations';

const Navigation = createBottomTabNavigator({
  Home,
  Vaccinations,
  Info,
  About,
});
const AppContainer = createAppContainer(Navigation);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
}
