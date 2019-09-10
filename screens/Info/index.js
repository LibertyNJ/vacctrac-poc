import React from 'react';

import { FlatList, StyleSheet } from 'react-native';

import Icon from '@expo/vector-icons/FontAwesome5';

import Screen from '../../components/Screen';
import VaccineInfoListItem from './components/VaccineInfoListItem';

import vaccineInfo from './vaccine-info';

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
        renderItem={VaccineInfoListItem}
        style={styles.FlatList}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  FlatList: {
    padding: 20,
  },
});
