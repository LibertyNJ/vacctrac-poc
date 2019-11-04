import { connect } from 'react-redux';

import Counter from './components/Counter';

export default connect(mapStateToProps)(Counter);

function mapStateToProps(state) {
  return {
    count: selectRemainingVaccinations(state).length,
  };
}

function selectRemainingVaccinations({ vaccinations }) {
  return vaccinations.filter(vaccination => !isCompleted(vaccination));
}

function isCompleted({ isCompleted }) {
  return isCompleted;
}
