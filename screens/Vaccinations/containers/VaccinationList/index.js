import { connect } from 'react-redux';

import { SectionList } from 'react-native';

export default connect(mapStateToProps)(SectionList);

function mapStateToProps(state) {
  return {
    sections: [
      {
        data: getRemainingVaccinations(state.vaccinations),
        title: 'Remaining',
      },
      {
        data: getCompletedVaccinations(state.vaccinations),
        title: 'Completed',
      },
    ],
  };
}

function getRemainingVaccinations(vaccinations) {
  return vaccinations
    .filter(vaccination => !isCompleted(vaccination))
    .sort(compareEventDates);
}

function getCompletedVaccinations(vaccinations) {
  return vaccinations
    .filter(vaccination => isCompleted(vaccination))
    .sort(compareEventDates);
}

function isCompleted({ completed }) {
  return completed;
}

function compareEventDates({ date: dateA }, { date: dateB }) {
  return dateA - dateB;
}
