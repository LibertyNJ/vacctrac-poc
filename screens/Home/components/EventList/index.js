import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

import EventListItem from './EventListItem';

export default function EventList({ events }) {
  return (
    <FlatList
      data={events}
      ListEmptyComponent={<Text>No upcoming events in the next 30 days.</Text>}
      renderItem={EventListItem}
      style={styles.flatList}
    />
  );
}

const styles = StyleSheet.create({
  flatList: {
    marginBottom: 16,
  },
});
