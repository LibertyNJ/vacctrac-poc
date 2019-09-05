import React from 'react';

import Icon from '@expo/vector-icons/FontAwesome5';

import Screen from '../../components/Screen';
import VaccineInfoList from './components/VaccineInfoList';

Info.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon color={tintColor} name="info" size={25} />
  ),
};

export default function Info() {
  return (
    <Screen heading="Vaccine Information">
      <VaccineInfoList />
    </Screen>
  );
}
