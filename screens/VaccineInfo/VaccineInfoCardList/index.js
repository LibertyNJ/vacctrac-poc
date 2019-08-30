import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import VaccineInfoCard from './VaccineInfoCard';

import vaccineInfo from './vaccine-info';

export default function VaccineInfoCardList() {
  return <FlatList data={vaccineInfo} renderItem={VaccineInfoCard} />;
}
