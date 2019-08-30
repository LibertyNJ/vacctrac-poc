import React from 'react';

import Screen from '../../components/Screen';
import VaccineInfoCardList from './VaccineInfoCardList';

export default function VaccineInfo() {
  return (
    <Screen heading="Vaccine Information">
      <VaccineInfoCardList />
    </Screen>
  );
}
