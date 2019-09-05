import { connect } from 'react-redux';

import DatePicker from '../../../components/DatePicker';

import { setProcedureDate } from '../../../actions/creators';

const mapStateToProps = (state, ownProps) => {
  return {
    date: state.procedureDate,
    label: 'Your procedure is scheduled for: ',
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { handleDateSet: date => dispatch(setProcedureDate(date)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DatePicker);
