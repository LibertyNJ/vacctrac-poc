import React from 'react';

import { StyleSheet } from 'react-native';

import Icon from '@expo/vector-icons/FontAwesome5';

import SectionHeader from './components/SectionHeader';
import Screen from '../../components/Screen';
import VaccinationList from './containers/VaccinationList';
import VaccinationListItem from './components/VaccinationListItem';

Vaccinations.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon color={tintColor} name="syringe" size={24} />
  ),
};

export default function Vaccinations() {
  return (
    <Screen heading="Your Vaccinations">
      <VaccinationList
        renderItem={VaccinationListItem}
        renderSectionHeader={SectionHeader}
        style={styles.VaccinationList}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  VaccinationList: {
    paddingHorizontal: 20,
  },
});
