import { SectionList } from 'react-native';
import { connect } from 'react-redux';

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

function isCompleted({ isCompleted }) {
  return isCompleted;
}

function compareEventDates({ date: dateA }, { date: dateB }) {
  return dateA - dateB;
}
