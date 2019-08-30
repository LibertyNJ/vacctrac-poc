import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Event from './Event';

export default function EventList({ events }) {
  return <FlatList data={events} renderItem={Event} />;
}
