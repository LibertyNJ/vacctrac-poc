import React from 'react';

import Screen from '../../components/Screen';
import Section from '../../components/Section';

import EventList from './EventList';
import ProcedureDate from './ProcedureDate';
import RemainingVaccinations from './RemainingVaccinations';

export default function Home() {
  return (
    <Screen heading="VaccTrac">
      <Section heading="Summary">
        <ProcedureDate />
        <RemainingVaccinations />
      </Section>
      <Section heading="Upcoming events">
        <EventList
          events={[
            { date: '08/08/2050', event: 'Shingrix vaccination', key: '1' },
            { date: '08/10/2050', event: 'TDaP vaccination', key: '2' },
            { date: '08/12/2050', event: 'Surgery', key: '3' },
          ]}
        />
      </Section>
    </Screen>
  );
}
