import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <>
      <View style={styles.section}>
        <Text>Your procedure is scheduled for: 08/12/2050</Text>
        <Text>You have 2 vaccinations remaining.</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Upcoming events</Text>
        <FlatList
          data={[
            { date: '08/08/2050', event: 'Shingrix vaccination', key: '1' },
            { date: '08/10/2050', event: 'TDaP vaccination', key: '2' },
            { date: '08/12/2050', event: 'Surgery', key: '3' },
          ]}
          renderItem={({ item }) => (
            <View key={item.key} style={styles.scheduledEvent}>
              <Text>{item.date}</Text>
              <Text>{item.event}</Text>
            </View>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  body: { flex: 1, paddingHorizontal: 16 },
  scheduledEvent: { marginBottom: 16 },
  section: { marginBottom: 16 },
  sectionHeader: { fontWeight: 'bold', marginBottom: 16 },
});
