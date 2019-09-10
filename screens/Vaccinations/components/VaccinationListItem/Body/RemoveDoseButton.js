import { Button } from 'react-native';

import { connect } from 'react-redux';

import { removeVaccinationDose } from '../../../../../actions/creators';

export default connect(
  null,
  mapDispatchToProps
)(Button);

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onPress: () =>
      dispatch(removeVaccinationDose(ownProps.id, ownProps.createdById)),
  };
}
