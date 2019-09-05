import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import VaccineInfoListItem from './VaccineInfoListItem';

import vaccineInfo from './vaccine-info';

export default function VaccineInfoList() {
  return (
    <FlatList
      data={vaccineInfo}
      renderItem={VaccineInfoListItem}
      style={styles.flatList}
    />
  );
}

const styles = StyleSheet.create({
  flatList: {},
});
