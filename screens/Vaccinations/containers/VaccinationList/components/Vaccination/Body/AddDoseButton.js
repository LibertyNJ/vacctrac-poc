import Button from '../../../../../../../components/Button';

import { connect } from 'react-redux';

import { addVaccinationDose } from '../../../../../../../actions/creators';

export default connect(
  null,
  mapDispatchToProps
)(Button);

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onPress: () => dispatch(addVaccinationDose(ownProps.id)),
  };
}
