import { connect } from 'react-redux';

import CompletionSwitch from '../components/CompletionSwitch';

import { toggleVaccinationCompletion } from '../../../actions/creators';

export default connect(
  null,
  mapDispatchToProps
)(CompletionSwitch);

function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleChange: () => dispatch(toggleVaccinationCompletion(ownProps.id)),
  };
}
