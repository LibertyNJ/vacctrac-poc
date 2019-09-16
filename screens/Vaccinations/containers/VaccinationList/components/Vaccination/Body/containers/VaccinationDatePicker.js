'use-strict';

import { connect } from 'react-redux';

import DatePicker from '../../../../../../../../components/DatePicker';

import { setVaccinationDate } from '../../../../../../../../actions/creators';

export default connect(
  null,
  mapDispatchToProps
)(DatePicker);

function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleDateSet: date => dispatch(setVaccinationDate(ownProps.id, date)),
  };
}
