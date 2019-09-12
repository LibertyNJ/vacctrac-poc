import { connect } from 'react-redux';

import LabeledCheckBox from '../../../../../components/LabeledCheckBox';

import { toggleVaccinationCompletion } from '../../../../../actions/creators';

export default connect(
  null,
  mapDispatchToProps
)(LabeledCheckBox);

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onChange: () => dispatch(toggleVaccinationCompletion(ownProps.id)),
  };
}
