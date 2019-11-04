import { connect } from 'react-redux';

import LabeledSwitch from '../../../../../../../../components/LabeledSwitch';
import { toggleVaccinationCompletion } from '../../../../../../../../redux/actions/creators';

export default connect(
  null,
  mapDispatchToProps
)(LabeledSwitch);

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onChange: () => dispatch(toggleVaccinationCompletion(ownProps.id)),
  };
}
