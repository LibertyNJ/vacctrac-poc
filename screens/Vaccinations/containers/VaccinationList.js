import { connect } from 'react-redux';

import VaccinationList from '../components/VaccinationList';

export default connect(mapStateToProps)(VaccinationList);

function mapStateToProps(state) {
  return {
    completedVaccinations: state.vaccinations
      .filter(vaccination => isVaccinationCompleted(vaccination))
      .sort(compareEventDates),
    remainingVaccinations: state.vaccinations
      .filter(vaccination => !isVaccinationCompleted(vaccination))
      .sort(compareEventDates),
  };
}

function isVaccinationCompleted({ completed }) {
  return completed;
}

function compareEventDates({ date: dateA }, { date: dateB }) {
  return dateA - dateB;
}
