import Icon from '@expo/vector-icons/FontAwesome5';
import React from 'react';
import { StyleSheet } from 'react-native';

import UpcomingEventList from './containers/UpcomingEventList';
import ListEmpty from './containers/UpcomingEventList/components/ListEmpty';
import SectionFooter from './containers/UpcomingEventList/components/SectionFooter';
import SectionHeader from './containers/UpcomingEventList/components/SectionHeader';
import UpcomingEvent from './containers/UpcomingEventList/components/UpcomingEvent';
import ProcedureDatePicker from './containers/ProcedureDatePicker';
import VaccinationCounter from './containers/VaccinationCounter';
import Screen from '../../components/Screen';
import Section from '../../components/Section';

Home.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon color={tintColor} name="home" size={24} />
  ),
};

export default function Home() {
  return (
    <Screen heading="VaccTrac">
      <Section heading="Summary" style={styles.SummarySection}>
        <ProcedureDatePicker
          label="Your procedure is scheduled for:"
          style={styles.ProcedureDatePicker}
        />
        <VaccinationCounter />
      </Section>
      <Section
        headerStyle={styles.UpcomingEventsSectionHeader}
        heading="Upcoming events"
        last
        style={[styles.UpcomingEventsSection]}
      >
        <UpcomingEventList
          keyExtractor={extractKey}
          ListEmptyComponent={ListEmpty}
          renderItem={UpcomingEvent}
          renderSectionFooter={SectionFooter}
          renderSectionHeader={SectionHeader}
          style={styles.UpcomingEventList}
        />
      </Section>
    </Screen>
  );
}

const styles = StyleSheet.create({
  ProcedureDatePicker: {
    marginBottom: 20,
  },
  SummarySection: {
    paddingHorizontal: 20,
  },
  UpcomingEventList: {
    paddingHorizontal: 20,
  },
  UpcomingEventsSection: {
    flex: 1,
  },
  UpcomingEventsSectionHeader: {
    paddingHorizontal: 20,
  },
});

function extractKey({ id }) {
  return id;
}
