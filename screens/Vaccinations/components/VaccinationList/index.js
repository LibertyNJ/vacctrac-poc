import React from 'react';
import { SectionList, StyleSheet } from 'react-native';

import SectionHeader from './SectionHeader';
import VaccinationListItem from './VaccinationListItem';

export default function VaccinationList({
  completedVaccinations,
  remainingVaccinations,
}) {
  return (
    <SectionList
      renderItem={VaccinationListItem}
      renderSectionHeader={SectionHeader}
      sections={[
        {
          data: completedVaccinations,
          title: 'Completed',
        },
        {
          data: remainingVaccinations,
          title: 'Remaining',
        },
      ]}
      style={styles.sectionList}
    />
  );
}

const styles = StyleSheet.create({
  sectionList: {},
});
