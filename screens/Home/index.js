import React from 'react';

import Icon from '@expo/vector-icons/FontAwesome5';

import Screen from '../../components/Screen';
import Section from '../../components/Section';

import EventList from './components/EventList';

import ProcedureDatePicker from './containers/ProcedureDatePicker';
import UpcomingEventList from './containers/UpcomingEventList';
import VaccinationCounter from './containers/VaccinationCounter';

Home.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon color={tintColor} name="home" size={25} />
  ),
};

export default function Home() {
  return (
    <Screen heading="VaccTrac">
      <Section heading="Summary">
        <ProcedureDatePicker />
        <VaccinationCounter />
      </Section>
      <Section heading="Upcoming events">
        <UpcomingEventList />
      </Section>
    </Screen>
  );
}
