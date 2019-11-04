import Icon from '@expo/vector-icons/FontAwesome5';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ItemSeparator from './components/ItemSeparator';
import ListFooter from './components/ListFooter';
import ListHeader from './components/ListHeader';
import VaccineInfoCard from './components/VaccineInfoCard';
import vaccineInfo from './vaccine-info';
import Screen from '../../components/Screen';

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
        keyExtractor={extractKey}
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

function extractKey(item, index) {
  return index.toString();
}
