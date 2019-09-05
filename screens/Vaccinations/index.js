import React from 'react';

import Icon from '@expo/vector-icons/FontAwesome5';

import Screen from '../../components/Screen';

import VaccinationList from './containers/VaccinationList';

Vaccinations.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon color={tintColor} name="syringe" size={25} />
  ),
};

export default function Vaccinations() {
  return (
    <Screen heading="Your Vaccinations">
      <VaccinationList />
    </Screen>
  );
}
