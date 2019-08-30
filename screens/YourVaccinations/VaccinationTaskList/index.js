import React from 'react';
import { SectionList, StyleSheet } from 'react-native';

import SectionHeader from './SectionHeader';
import VaccinationTask from '../VaccinationTask';

export default function VaccinationTaskList() {
  return (
    <SectionList
      renderItem={VaccinationTask}
      renderSectionHeader={SectionHeader}
      sections={[
        {
          data: [],
          title: 'Completed',
        },
        {
          data: [],
          title: 'Remaining',
        },
      ]}
    />
  );
}
