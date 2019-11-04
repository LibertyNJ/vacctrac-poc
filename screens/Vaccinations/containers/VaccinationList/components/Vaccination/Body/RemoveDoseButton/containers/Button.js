import { connect } from 'react-redux';

import Button from '../../../../../../../../../components/Button';
import { removeVaccinationDose } from '../../../../../../../../../redux/actions/creators';

export default connect(
  null,
  mapDispatchToProps
)(Button);

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onPress: () =>
      dispatch(removeVaccinationDose(ownProps.id, ownProps.previousDoseId)),
  };
}
