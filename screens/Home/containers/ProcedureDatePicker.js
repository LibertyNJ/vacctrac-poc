import { connect } from 'react-redux';

import DatePicker from '../../../components/DatePicker';
import { setProcedureDate } from '../../../redux/actions/creators';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DatePicker);

function mapStateToProps(state) {
  return {
    date: state.procedureDate,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleDateSet: date => dispatch(setProcedureDate(date)),
  };
}
