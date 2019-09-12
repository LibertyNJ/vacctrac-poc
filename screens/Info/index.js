import React from 'react';

import { FlatList, StyleSheet, View } from 'react-native';

import Icon from '@expo/vector-icons/FontAwesome5';

import Screen from '../../components/Screen';

import ItemSeparator from './components/ItemSeparator';
import ListFooter from './components/ListFooter';
import ListHeader from './components/ListHeader';
import VaccineInfoCard from './components/VaccineInfoCard';

import vaccineInfo from './scripts/vaccine-info';

Info.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon color={tintColor} name="info" size={24} />
  ),
};

export default function Info() {
  return (
    <Screen heading="Vaccine Information">
      <FlatList
        data={vaccineInfo}
        ItemSeparatorComponent={ItemSeparator}
        ListFooterComponent={ListFooter}
        ListHeaderComponent={ListHeader}
        renderItem={VaccineInfoCard}
        style={styles.FlatList}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  FlatList: {
    paddingHorizontal: 20,
  },
});
