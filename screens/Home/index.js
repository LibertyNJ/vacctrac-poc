import React from 'react';

import { StyleSheet, View } from 'react-native';

import Icon from '@expo/vector-icons/FontAwesome5';

import Screen from '../../components/Screen';
import Section from '../../components/Section';

import UpcomingEventList from './containers/UpcomingEventList';
import ListEmpty from './containers/UpcomingEventList/components/ListEmpty';
import SectionFooter from './containers/UpcomingEventList/components/SectionFooter';
import SectionHeader from './containers/UpcomingEventList/components/SectionHeader';
import UpcomingEvent from './containers/UpcomingEventList/components/UpcomingEvent';

import ProcedureDatePicker from './containers/ProcedureDatePicker';
import VaccinationCounter from './containers/VaccinationCounter';

Home.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon color={tintColor} name="home" size={24} />
  ),
};

export default function Home() {
  return (
    <Screen heading="VaccTrac">
      <View style={styles.View}>
        <Section heading="Summary">
          <ProcedureDatePicker
            label="Your procedure is scheduled for:"
            style={styles.ProcedureDatePicker}
          />
          <VaccinationCounter style={styles.VaccinationCounter} />
        </Section>
        <Section heading="Upcoming events">
          <UpcomingEventList
            ListEmptyComponent={ListEmpty}
            renderItem={UpcomingEvent}
            renderSectionFooter={SectionFooter}
            renderSectionHeader={SectionHeader}
            style={styles.UpcomingEventList}
          />
        </Section>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  ProcedureDatePicker: {
    marginBottom: 20,
  },
  UpcomingEventList: {},
  VaccinationCounter: {},
  View: {
    paddingHorizontal: 20,
  },
});
