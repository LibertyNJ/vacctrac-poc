import Icon from '@expo/vector-icons/FontAwesome5';
import React from 'react';
import { StyleSheet } from 'react-native';

import VaccinationList from './containers/VaccinationList';
import Vaccination from './containers/VaccinationList/components/Vaccination';
import ItemSeparator from './containers/VaccinationList/components/ItemSeparator';
import ListFooter from './containers/VaccinationList/components/ListFooter';
import SectionHeader from './containers/VaccinationList/components/SectionHeader';
import Screen from '../../components/Screen';

Vaccinations.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon color={tintColor} name="syringe" size={24} />
  ),
};

export default function Vaccinations() {
  return (
    <Screen heading="Your Vaccinations">
      <VaccinationList
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={extractKey}
        ListFooterComponent={ListFooter}
        renderItem={Vaccination}
        renderSectionHeader={SectionHeader}
        stickySectionHeadersEnabled
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

function extractKey({ id }) {
  return id.toString();
}
